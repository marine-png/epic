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
  label = 'Notre équipe',
  title = 'Nos experts',
}: {
  experts: Expert[];
  accentColor?: string;
  label?: string;
  title?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const expert = experts[activeIdx];

  return (
    <section className="py-20 bg-[#0f1e3c]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{label}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{title}</h2>
        </div>

        {/* Main spotlight */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-white/10">

          {/* Left — contenu */}
          <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center bg-white/[0.03]">
            <AnimatePresence mode="wait">
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-[#C9A96E]">
                  {expert.role}
                </p>
                <h3
                  className="font-black leading-none mb-7 text-white"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  {expert.name}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-5">{expert.desc}</p>
                {expert.bullets && expert.bullets.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {expert.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-white/45">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#C9A96E]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {expert.tags.split(' · ').map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C9A96E]/15 text-[#C9A96E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — panel avatar */}
          <div className="lg:w-[340px] flex-shrink-0 relative overflow-hidden flex items-center justify-center min-h-[300px] bg-[#1B3A6B]">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#C9A96E]/10" />
            {/* Lettre fantôme */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
              <span className="font-black text-white" style={{ fontSize: '18rem', lineHeight: 1 }}>{expert.initial}</span>
            </div>
            {/* Déco boussole */}
            <div className="absolute top-8 right-8 opacity-25">
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
                className="relative z-10 w-36 h-36 rounded-2xl flex items-center justify-center font-black text-6xl text-white shadow-2xl bg-[#C9A96E]"
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
                className="flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-200"
                style={{
                  borderColor: activeIdx === idx ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)',
                  backgroundColor: activeIdx === idx ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 transition-all"
                  style={{
                    backgroundColor: activeIdx === idx ? '#C9A96E' : 'rgba(255,255,255,0.1)',
                    color: 'white',
                  }}
                >
                  {e.initial}
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-white">{e.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{e.role}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
