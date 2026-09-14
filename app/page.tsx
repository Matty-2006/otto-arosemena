import Hero from '@/components/sections/Hero';
import Acerca from '@/components/sections/Acerca';
import MisionVision from '@/components/sections/MisionVision';
import Informacion from '@/components/sections/Informacion';
import Testimonios from '@/components/sections/Testimonios';
import CtaBanner from '@/components/sections/CtaBanner';
import Ubicacion from '@/components/sections/Ubicacion';
import Contacto from '@/components/sections/Contacto';

export default function Home() {
  return (
    <>
      <Hero />
      <Acerca />
      <MisionVision />
      <Informacion />
      <Testimonios />
      <CtaBanner />
      <Ubicacion />
      <Contacto />
    </>
  );
}