'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Expert {
  id: string;
  initial: string;
  name: string;
  role: string;
  desc: string;
  bullets?: string[];
  tags: string;
  color: string;
}

export default function TeamSection({
  experts,
  accentColor = '#1B3A6B',
  bgColor = '#EEF3FB',
  label = 'Notre équipe',
  title = 'Nos experts',
}: {
  experts: Expert[];
  accentColor?: string;
  bgColor?: string;
  label?: string;
  title?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const expert = experts[activeIdx];

  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accentColor + '80' }}>
            {label}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mt-2">{title}</h2>
        </div>

        {/* Main spotlight */}
        <div className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-3xl">

          {/* Left — contenu éditorial */}
          <div className="flex-1 bg-white rounded-3xl lg:rounded-r-none p-10 lg:p-14 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: '#C9A96E' }}>
                  {expert.role}
                </p>
                <h3
                  className="font-black leading-none mb-7"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: accentColor }}
                >
                  {expert.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{expert.desc}</p>
                {expert.bullets && expert.bullets.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {expert.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {expert.tags.split(' · ').map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: accentColor + '12', color: accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — panel avatar */}
          <div
            className="lg:w-[340px] flex-shrink-0 relative overflow-hidden flex items-center justify-center min-h-[300px] rounded-3xl lg:rounded-l-none"
            style={{ backgroundColor: accentColor }}
          >
            {/* Déco cercles */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full" style={{ backgroundColor: '#C9A96E18' }} />
            {/* Lettre fantôme */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
              <span className="font-black text-white" style={{ fontSize: '18rem', lineHeight: 1 }}>{expert.initial}</span>
            </div>
            {/* Déco étoile / boussole simple */}
            <div className="absolute top-8 right-8 opacity-30">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <line x1="18" y1="0" x2="18" y2="36" stroke="#C9A96E" strokeWidth="1.5"/>
                <line x1="0" y1="18" x2="36" y2="18" stroke="#C9A96E" strokeWidth="1.5"/>
                <line x1="4" y1="4" x2="32" y2="32" stroke="#C9A96E" strokeWidth="0.8"/>
                <line x1="32" y1="4" x2="4" y2="32" stroke="#C9A96E" strokeWidth="0.8"/>
                <circle cx="18" cy="18" r="5" fill="#C9A96E"/>
              </svg>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={expert.id + '-av'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="relative z-10 w-36 h-36 rounded-2xl flex items-center justify-center font-black text-6xl text-white shadow-2xl"
                style={{ backgroundColor: '#C9A96E' }}
              >
                {expert.initial}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnails */}
        {experts.length > 1 && (
          <div className="flex gap-4 mt-5 flex-wrap">
            {experts.map((e, idx) => (
              <button
                key={e.id}
                onClick={() => setActiveIdx(idx)}
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border-2 transition-all duration-200"
                style={{
                  borderColor: activeIdx === idx ? accentColor : 'transparent',
                  boxShadow: activeIdx === idx ? `0 4px 20px ${accentColor}22` : 'none',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 transition-all"
                  style={{
                    backgroundColor: activeIdx === idx ? accentColor : bgColor,
                    color: activeIdx === idx ? 'white' : accentColor,
                  }}
                >
                  {e.initial}
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-[#0f1e3c]">{e.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{e.role}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
