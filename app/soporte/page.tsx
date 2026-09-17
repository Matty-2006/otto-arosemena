'use client';
import { FormEvent, useState } from 'react';
import type { Metadata } from 'next';
import { CheckCircle2, HelpCircle, Mail, Phone } from 'lucide-react';
import TeacherPageShell from '@/components/TeacherPageShell';

export default function SoportePage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <TeacherPageShell eyebrow="Estamos para ayudarte" title="Soporte docente" description="Si algo no funciona o no encuentras un documento, escríbenos. Te responderemos lo antes posible.">
    <div className="support-layout"><div className="support-info"><h2>¿En qué podemos ayudarte?</h2><p>Cuéntanos con palabras sencillas qué necesitas. No tienes que saber de tecnología para pedir ayuda.</p><div className="support-contact"><span><Mail size={18} /> 17h00988@gmail.com</span><span><Phone size={18} /> (02) 265-0117</span></div><div className="support-tip"><HelpCircle size={20} /><span><b>Consejo:</b> si puedes, indica el nombre del documento o sección que estabas buscando.</span></div></div><form className="support-form" onSubmit={submit}><label htmlFor="name">Tu nombre</label><input id="name" required placeholder="Escribe tu nombre" /><label htmlFor="message">¿Qué necesitas?</label><textarea id="message" required rows={5} placeholder="Escribe aquí tu mensaje" /><button type="submit">Enviar mensaje</button>{sent && <p className="form-message success"><CheckCircle2 size={16} /> Mensaje preparado. Coordinación se pondrá en contacto contigo.</p>}</form></div>
  </TeacherPageShell>;
}
