'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedGrid = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#C9A96E_0%,#C9A96E_1px,transparent_1px,transparent_5%)] opacity-[0.04]" />
  </motion.div>
);

export function BackgroundCirclesHero({ className }: { className?: string }) {
  return (
    <div className={cn('relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#020817]', className)}>
      <AnimatedGrid />

      {/* Cercles animés */}
      <motion.div className="absolute h-[520px] w-[520px]">
        {[
          'border-[#C9A96E]/50 from-[#C9A96E]/20',
          'border-[#1B3A6B]/70 from-[#1B3A6B]/15',
          'border-white/10 from-white/5',
        ].map((classes, i) => (
          <motion.div
            key={i}
            className={cn('absolute inset-0 rounded-full border-2 bg-gradient-to-br to-transparent', classes)}
            style={{ scale: 1 + i * 0.18 }}
            animate={{
              rotate: 360,
              scale: [1 + i * 0.18, 1 + i * 0.18 + 0.04, 1 + i * 0.18],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              rotate: { duration: 18 + i * 8, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
      </motion.div>

      {/* Lueur centrale dorée */}
      <div className="absolute inset-0 [mask-image:radial-gradient(55%_45%_at_50%_50%,#000_40%,transparent)] pointer-events-none">
        <div className="absolute inset-0 blur-[100px]" style={{ background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.18) 0%, transparent 70%)' }} />
      </div>

      {/* Lueur horizon bleue */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.18) 0%, transparent 70%)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '22%', left: '12%', right: '12%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,179,255,0.4) 25%, rgba(186,230,255,0.85) 50%, rgba(99,179,255,0.4) 75%, transparent)',
        boxShadow: '0 0 18px 5px rgba(99,179,255,0.25)',
      }} />

      {/* Texte EPIC */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center select-none"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1
          className="font-black text-white"
          style={{
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            lineHeight: 1,
            letterSpacing: '0.08em',
            textShadow: '0 0 80px rgba(201,169,110,0.15)',
          }}
        >
          EPIC
        </h1>
        <motion.p
          className="font-semibold tracking-[0.42em] uppercase mt-3"
          style={{ color: '#C9A96E', fontSize: 'clamp(0.55rem, 1vw, 0.8rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Entreprise · Patrimoine · Immobilier · Conseil
        </motion.p>
      </motion.div>
    </div>
  );
}
