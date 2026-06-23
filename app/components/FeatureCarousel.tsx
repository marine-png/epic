'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Building2, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    id: 'investir',
    label: 'Investir en France',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200',
    description: 'Comprendre les opportunités et structurer votre investissement en France.',
  },
  {
    id: 'business',
    label: 'Commencer un business',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200',
    description: 'Créer et développer votre entreprise avec une base solide en France.',
  },
  {
    id: 'acheter',
    label: 'Acheter en France',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    description: 'Réussir votre acquisition immobilière professionnelle ou privée.',
  },
];

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 72;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => setStep((p) => p + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const len = FEATURES.length;
    let d = index - currentIndex;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    if (d === 0) return 'active';
    if (d === -1) return 'prev';
    if (d === 1) return 'next';
    return 'hidden';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
      <div className="relative overflow-hidden rounded-[2rem] flex flex-col lg:flex-row min-h-[560px] lg:aspect-video border border-white/10 shadow-2xl">

        {/* Panneau gauche — titre + labels */}
        <div className="w-full lg:w-[42%] min-h-[320px] lg:h-full relative z-30 flex flex-col justify-between overflow-hidden bg-[#0f1e3c]">
          {/* Titre */}
          <div className="px-8 md:px-12 pt-10 pb-2">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A96E] mb-2">NOS ARTICLES</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Nos conseils pour<br />vos projets en France
            </h2>
            <div className="w-10 h-0.5 bg-[#C9A96E] mt-3" />
          </div>

          {/* Labels animés */}
          <div className="relative flex-1 flex items-center justify-start overflow-hidden px-8 md:px-12 -mt-4">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0f1e3c] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f1e3c] to-transparent z-10 pointer-events-none" />
            <div className="relative w-full h-full flex items-center z-20">
              {FEATURES.map((feature, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wd = wrap(-(FEATURES.length / 2), FEATURES.length / 2, distance);
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    style={{ height: ITEM_HEIGHT, width: 'fit-content' }}
                    animate={{ y: wd * ITEM_HEIGHT, opacity: 1 - Math.abs(wd) * 0.3 }}
                    transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 1 }}
                    className="absolute flex items-center"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        'relative flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-500 text-left border',
                        isActive
                          ? 'bg-[#C9A96E] text-[#0f1e3c] border-[#C9A96E] font-semibold'
                          : 'bg-transparent text-white/50 border-white/15 hover:text-white hover:border-white/30'
                      )}
                    >
                      <Icon size={16} className={isActive ? 'text-[#0f1e3c]' : 'text-white/40'} />
                      <span className="text-sm tracking-wide whitespace-nowrap">{feature.label}</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Indicateur de progression */}
          <div className="px-8 md:px-12 pb-8 flex gap-2">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleChipClick(i)}
                className={cn('h-0.5 rounded-full transition-all duration-500', i === currentIndex ? 'w-8 bg-[#C9A96E]' : 'w-4 bg-white/20')}
              />
            ))}
          </div>
        </div>

        {/* Panneau droit — cartes images */}
        <div className="flex-1 min-h-[380px] lg:h-full relative bg-[#07111f] flex items-center justify-center py-12 px-6 md:px-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === 'active';
              const isPrev = status === 'prev';
              const isNext = status === 'next';

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 rounded-[1.5rem] overflow-hidden border-4 border-[#0f1e3c] origin-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn('w-full h-full object-cover transition-all duration-700', isActive ? 'grayscale-0' : 'grayscale blur-sm brightness-50')}
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-[#C9A96E] text-[#0f1e3c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit mb-3">
                          {feature.label}
                        </div>
                        <p className="text-white font-medium text-lg md:text-xl leading-snug drop-shadow-md">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
