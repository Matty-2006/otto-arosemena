'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 gradient-blue-green"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-grid-fade" />
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-28 w-28 rounded-full bg-white p-2 shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full rounded-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative text-center"
          >
            <p className="font-display text-lg font-extrabold uppercase tracking-[0.3em] text-white">
              Otto Arosemena Gómez
            </p>
            <p className="mt-1 font-display text-[11px] font-medium uppercase tracking-[0.45em] text-white/80">
              Educación Básica
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/25">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}