'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type Bullet = { label: string; desc: string };
type Item = { num: string; title: string; text?: string; bullets?: Bullet[] };

const ITEMS: Item[] = [
  {
    num: '01', title: 'Notre vision',
    text: "Nous croyons que chaque projet mérite une approche sur mesure, adaptée aux ambitions de nos clients. Votre succès est notre priorité — nous travaillons à maximiser vos résultats tout en sécurisant chaque étape de votre parcours.",
  },
  {
    num: '02', title: 'Notre mission',
    text: "Accompagner nos clients de manière intégrée et professionnelle, en combinant expertises en entreprise, patrimoine et immobilier pour offrir des solutions complètes, cohérentes et orientées résultats.",
  },
  {
    num: '03', title: 'Nos valeurs',
    bullets: [
      { label: 'Proximité', desc: "Présents à chaque étape, de la première conversation au suivi final." },
      { label: 'Transparence', desc: "Des conseils clairs, sans jargon ni surprise." },
      { label: 'Expertise', desc: "Une équipe de spécialistes avec des domaines complémentaires." },
      { label: 'Résultats', desc: "Votre réussite est l'unique mesure de notre succès." },
    ],
  },
  {
    num: '04', title: 'Nos engagements',
    bullets: [
      { label: 'Accompagnement personnalisé', desc: "Chaque client est unique — nous adaptons notre approche qu'il s'agisse d'un projet national ou international." },
      { label: 'Expertise pluridisciplinaire', desc: "Entreprise, Patrimoine et Immobilier : trois pôles qui travaillent ensemble pour votre projet global." },
      { label: 'Suivi de A à Z', desc: "Nous ne disparaissons pas après la signature. Nous restons à vos côtés jusqu'au succès complet de votre projet." },
    ],
  },
];

export default function ChainSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-px border-l border-dashed border-gray-200 hidden md:block" />

      <div className="flex flex-col gap-6">
        {ITEMS.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isOpen = open === i;

          return (
            <div key={item.num} className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
              <div
                className="absolute left-1/2 -translate-x-1/2 top-7 w-3 h-3 rounded-full border-2 border-white hidden md:block z-10 transition-all duration-300"
                style={{ backgroundColor: isOpen ? '#C9A96E' : '#e5e7eb' }}
              />
              <div
                className={`absolute top-[1.625rem] h-px hidden md:block transition-colors duration-300 ${isLeft ? 'left-1/2 w-6' : 'right-1/2 w-6'}`}
                style={{ backgroundColor: isOpen ? '#C9A96E60' : '#e5e7eb' }}
              />

              <motion.div
                className="w-full md:w-[calc(50%-2rem)] bg-white rounded-2xl border overflow-hidden"
                animate={{
                  borderColor: isOpen ? '#C9A96E40' : '#e5e7eb',
                  boxShadow: isOpen ? '0 8px 32px rgba(201,169,110,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="h-0.5 transition-all duration-300" style={{ backgroundColor: isOpen ? '#C9A96E' : 'transparent' }} />

                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between gap-4 w-full px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-2xl font-black tabular-nums flex-shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? '#C9A96E' : '#e5e7eb' }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="text-base font-bold transition-colors duration-300"
                      style={{ color: isOpen ? '#0f1e3c' : '#6b7280' }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0">
                    <ChevronDown size={16} style={{ color: isOpen ? '#C9A96E' : '#d1d5db' }} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50">
                        {item.text && (
                          <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                        )}
                        {item.bullets && (
                          <ul className="space-y-3">
                            {item.bullets.map((b) => (
                              <li key={b.label} className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#C9A96E]" />
                                <div>
                                  <span className="text-sm font-semibold text-[#0f1e3c]">{b.label}</span>
                                  <span className="text-sm text-gray-500"> — {b.desc}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
