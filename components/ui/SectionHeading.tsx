'use client';

import { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowTone?: 'light' | 'blue' | 'green';
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
};

const eyebrowStyles: Record<NonNullable<SectionHeadingProps['eyebrowTone']>, string> = {
  light: 'eyebrow eyebrow-light',
  blue: 'eyebrow eyebrow-blue',
  green: 'eyebrow eyebrow-green',
};

export default function SectionHeading({
  eyebrow,
  eyebrowTone = 'blue',
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const aligned = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <Reveal className={`flex flex-col gap-4 ${aligned} ${className}`}>
      {eyebrow && <span className={eyebrowStyles[eyebrowTone]}>{eyebrow}</span>}
      <h2
        className={`text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-slate-300/90' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}