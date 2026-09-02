'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CreditCard, BarChart2, Building2, PlusCircle, TrendingUp, ChevronDown } from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  bullets?: string[];
  livrable?: string;
}

const ICONS = [Search, CreditCard, BarChart2, Building2, PlusCircle, TrendingUp];

export default function ServicesTabs({ services, color }: { services: Service[]; color: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Gauche — accordéon */}
      <div className="w-full lg:w-[48%] flex-shrink-0 flex flex-col gap-2">
        {services.map((s, i) => {
          const Icon = ICONS[i];
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-xl border transition-all duration-200"
              style={{
                borderColor: isOpen ? color + '60' : 'rgba(255,255,255,0.10)',
                backgroundColor: isOpen ? color + '0e' : 'rgba(255,255,255,0.03)',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex items-center justify-between gap-3 w-full px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: isOpen ? color + '20' : 'rgba(255,255,255,0.07)' }}
                  >
                    <Icon size={14} style={{ color: isOpen ? color : 'rgba(255,255,255,0.4)' }} />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isOpen ? 'white' : 'rgba(255,255,255,0.6)' }}
                  >
                    {s.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={15} style={{ color: isOpen ? color : 'rgba(255,255,255,0.25)' }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-sm text-white/60 leading-relaxed mb-3">{s.desc}</p>
                      {s.bullets && (
                        <ul className="space-y-1 mb-3">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-xs text-white/45">
                              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.livrable && (
                        <p className="text-xs font-semibold border-t border-white/10 pt-3 mt-1" style={{ color }}>
                          Livrable : {s.livrable}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Droite — image fixe */}
      <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 self-stretch min-h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
          alt="Analyse financière"
          className="w-full h-full object-cover"
          style={{ minHeight: 420 }}
        />
      </div>
    </div>
  );
}
