'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CreditCard, BarChart2, Building2, PlusCircle, TrendingUp, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  bullets?: string[];
  livrable?: string;
}

const ICONS = [Search, CreditCard, BarChart2, Building2, PlusCircle, TrendingUp];

const CHARTS = [
  [38, 52, 64, 78, 92],
  [45, 60, 55, 75, 88],
  [30, 48, 65, 80, 100],
  [50, 58, 70, 82, 90],
  [35, 50, 68, 78, 95],
  [40, 55, 72, 85, 98],
];

const KPIS = [
  [{ l: 'Faisabilité', v: '87%', t: '+12%' }, { l: 'Marché', v: '€2.4M', t: 'Adressable' }, { l: 'Risque', v: 'Faible', t: 'Validé' }],
  [{ l: 'Capacité', v: '340k€', t: '+8.5%' }, { l: 'Taux', v: '3.2%', t: 'Estimé' }, { l: 'Durée', v: '15 ans', t: 'Max' }],
  [{ l: 'Rentabilité', v: '+42k€', t: 'An 3' }, { l: 'Break-even', v: '18 mois', t: 'Prévu' }, { l: 'Marge', v: '28%', t: '+4pts' }],
  [{ l: 'Dossier', v: '96%', t: 'Complet' }, { l: 'Banques', v: '3', t: 'Contactées' }, { l: 'Accord', v: 'En cours', t: '' }],
  [{ l: 'Structure', v: 'SAS', t: 'Recommandée' }, { l: 'Capital', v: '10k€', t: 'Min.' }, { l: 'Délai', v: '5 jours', t: 'Immatr.' }],
  [{ l: 'Croissance', v: '+24%', t: 'Annuelle' }, { l: 'CA cible', v: '800k€', t: 'An 2' }, { l: 'Équipe', v: '+3 ETP', t: 'Prévu' }],
];

function DashboardMockup({ service, index, color }: { service: Service; index: number; color: string }) {
  const bars = CHARTS[index];
  const kpis = KPIS[index];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a1628]">
      {/* Browser chrome */}
      <div className="bg-[#162548] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
        </div>
        <div className="flex-1 bg-white/8 rounded px-3 py-1 text-white/30 text-xs">
          epic-conseil.fr/analyse
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-5">
        <div className="text-[#C9A96E] text-xs font-semibold uppercase tracking-widest mb-4">
          Analyse — {service.title}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {kpis.map((k) => (
            <div key={k.l} className="bg-white/5 rounded-xl p-3 border border-white/8">
              <p className="text-white/40 text-xs mb-1">{k.l}</p>
              <p className="text-white font-bold text-base leading-none mb-1">{k.v}</p>
              {k.t && <p className="text-[#C9A96E] text-xs">{k.t}</p>}
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/8 mb-3">
          <p className="text-white/40 text-xs mb-3">Prévisionnel — 5 ans</p>
          <div className="flex items-end gap-2" style={{ height: 80 }}>
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t transition-all duration-500"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === bars.length - 1 ? color : color + '35',
                  }}
                />
                <span className="text-white/25 text-xs">A{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desc */}
        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{service.desc}</p>

        {/* Livrable */}
        {service.livrable && (
          <p className="text-[#C9A96E] text-xs mt-3 font-medium">✓ Livrable : {service.livrable}</p>
        )}
      </div>
    </div>
  );
}

export default function ServicesTabs({ services, color }: { services: Service[]; color: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Gauche — liste */}
      <div className="w-full lg:w-[42%] flex-shrink-0">
        <p className="text-[#C9A96E] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Nos services</p>
        <p className="text-white/55 text-sm mb-6 leading-relaxed max-w-sm">
          De l&apos;étude de faisabilité à la mise en œuvre, nous vous accompagnons à chaque étape.
        </p>

        <div className="flex flex-col gap-2">
          {services.map((s, i) => {
            const Icon = ICONS[i];
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 w-full"
                style={{
                  borderColor: isActive ? color + '70' : 'rgba(255,255,255,0.08)',
                  backgroundColor: isActive ? color + '12' : 'transparent',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: isActive ? color + '22' : 'rgba(255,255,255,0.06)' }}
                  >
                    <Icon size={14} style={{ color: isActive ? color : 'rgba(255,255,255,0.35)' }} />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.55)' }}
                  >
                    {s.title}
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  style={{
                    color: isActive ? color : 'rgba(255,255,255,0.2)',
                    transform: isActive ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    flexShrink: 0,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Droite — dashboard */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <DashboardMockup service={services[active]} index={active} color={color} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
