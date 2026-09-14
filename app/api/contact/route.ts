import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT = process.env.EMAIL_FROM || '17h00988@gmail.com';

const sanitize = (v: unknown) => String(v ?? '').trim().slice(0, 2000);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const nombre = sanitize(body?.nombre);
    const email = sanitize(body?.email);
    const telefono = sanitize(body?.telefono);
    const asunto = sanitize(body?.asunto);
    const mensaje = sanitize(body?.mensaje);
    const empresa = sanitize(body?.empresa); // honeypot anti-spam

    if (empresa) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: 'Completa los campos obligatorios.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Ingresa un correo electrónico válido.' },
        { status: 400 }
      );
    }

    const subject = `[Web] ${asunto || 'Consulta general'} — ${nombre}`;
    const emailText = `
Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono || 'No indicado'}
Asunto: ${asunto || 'Consulta general'}

Mensaje:
${mensaje}
    `.trim();

    const hasSmtp = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD);

    if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: `"Web Otto Arosemena" <${process.env.EMAIL_USER}>`,
        to: RECIPIENT,
        replyTo: email,
        subject,
        text: emailText,
      });
      return NextResponse.json({ ok: true });
    }

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailText)}`;

    return NextResponse.json({ ok: true, useMailto: true, mailto });
  } catch (error) {
    console.error('Error enviando contacto:', error);
    return NextResponse.json(
      { ok: false, error: 'No fue posible enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}