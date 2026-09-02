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
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: accentColor + '99' }}>
            {label}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mt-2">{title}</h2>
        </div>

        {/* Main panel */}
        <div className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-100">
          {/* Left — content */}
          <div className="flex-1 p-10 lg:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
                  {expert.role}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: accentColor }}>
                  {expert.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{expert.desc}</p>
                {expert.bullets && expert.bullets.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {expert.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold" style={{ color: accentColor }}>{expert.tags}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — avatar */}
          <div
            className="lg:w-72 flex-shrink-0 flex items-center justify-center relative overflow-hidden min-h-[260px]"
            style={{ backgroundColor: accentColor }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full" style={{ backgroundColor: '#C9A96E22' }} />
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <span className="text-[220px] font-black text-white leading-none select-none">{expert.initial}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={expert.id + '-avatar'}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center font-black text-5xl text-white shadow-2xl"
                style={{ backgroundColor: '#C9A96E' }}
              >
                {expert.initial}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail selector */}
        {experts.length > 1 && (
          <div className="flex gap-4 mt-6 justify-center flex-wrap">
            {experts.map((e, idx) => (
              <button
                key={e.id}
                onClick={() => setActiveIdx(idx)}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-200"
                style={{
                  borderColor: activeIdx === idx ? accentColor : 'transparent',
                  backgroundColor: activeIdx === idx ? 'white' : 'rgba(255,255,255,0.55)',
                  boxShadow: activeIdx === idx ? '0 4px 16px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 transition-all"
                  style={{
                    backgroundColor: activeIdx === idx ? accentColor : bgColor,
                    color: activeIdx === idx ? 'white' : accentColor,
                  }}
                >
                  {e.initial}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold" style={{ color: activeIdx === idx ? '#0f1e3c' : '#6b7280' }}>
                    {e.name}
                  </p>
                  <p className="text-xs text-gray-400">{e.role.split(' ').slice(0, 3).join(' ')}…</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
