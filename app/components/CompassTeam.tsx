'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Griet = North (P), Nicolas = East (I), Marine = South (C), Pieter = West (E)
const MEMBERS = [
  {
    id: 'griet', initial: 'G', name: 'Griet', color: '#2D6A4F',
    role: 'Experte Patrimoine – Gestion patrimoniale & Fiscalité', pole: 'Patrimoine',
    bio: "Spécialiste en gestion patrimoniale et optimisation fiscale, Griet propose des solutions adaptées à chaque situation en tenant compte des objectifs à court, moyen et long terme.",
    details: [
      "Accompagnement des particuliers et investisseurs pour sécuriser et valoriser leur patrimoine",
      "Expertise en transmission et succession, structuration de portefeuille",
    ],
    tags: 'Optimisation fiscale · Structuration patrimoniale · Investissements',
    dir: 'north' as const, compassLetter: 'P',
  },
  {
    id: 'nicolas', initial: 'N', name: 'Nicolas', color: '#1B3A6B',
    role: 'Expert Entreprise – Structuration & Stratégie', pole: 'Entreprise',
    bio: "Spécialisé dans l'accompagnement des entrepreneurs, Nicolas intervient sur la structuration juridique, la stratégie et le développement des projets avec une approche personnalisée.",
    tags: 'Structuration · Stratégie · Développement',
    dir: 'east' as const, compassLetter: 'I',
  },
  {
    id: 'marine', initial: 'M', name: 'Marine', color: '#C9601A',
    role: 'Experte Immobilier', pole: 'Immobilier',
    bio: "Spécialiste de l'immobilier professionnel et de l'investissement immobilier privé, Marine accompagne entrepreneurs, investisseurs et particuliers dans leurs projets en France.",
    details: [
      "Recherche et acquisition de locaux commerciaux et fonds de commerce",
      "Accompagnement pour investisseurs nationaux et internationaux",
    ],
    tags: 'Immobilier professionnel · Investissement immobilier · Négociation',
    dir: 'south' as const, compassLetter: 'C',
  },
  {
    id: 'pieter', initial: 'P', name: 'Pieter', color: '#1B3A6B',
    role: 'Expert Entreprise – Acquisition & Développement', pole: 'Entreprise',
    bio: "Franco-belge, 55 ans, ingénieur commercial de formation, Pieter dispose d'une solide expérience en gestion, finance et entrepreneuriat.",
    details: [
      "9 ans dans les services financiers d'une entreprise de construction cotée",
      "6 ans dirigeant d'un hôtel en France",
      "9 ans dirigeant-fondateur d'une entreprise de distribution",
      "4 ans de conseil aux chefs d'entreprise",
    ],
    tags: 'Acquisition · Business plan · Financement · Stratégie',
    dir: 'west' as const, compassLetter: 'E',
  },
];

type Dir = 'north' | 'east' | 'south' | 'west';

// Compass center is 120px (radius 60). Lines start at 60px from center (240).
const LINE_COORDS: Record<Dir, { x1: number; y1: number; x2: number; y2: number }> = {
  north: { x1: 240, y1: 180, x2: 240, y2: 68 },
  south: { x1: 240, y1: 300, x2: 240, y2: 412 },
  east:  { x1: 300, y1: 240, x2: 412, y2: 240 },
  west:  { x1: 180, y1: 240, x2: 68,  y2: 240 },
};

const POS_STYLE: Record<Dir, React.CSSProperties> = {
  north: { position: 'absolute', top: 0,    left: '50%', transform: 'translateX(-50%)' },
  south: { position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  east:  { position: 'absolute', right: 0,  top: '50%',  transform: 'translateY(-50%)' },
  west:  { position: 'absolute', left: 0,   top: '50%',  transform: 'translateY(-50%)' },
};

// Full EPIC compass logo (same as SectionBanner), rendered on dark navy bg
function CompassLogo({ activeLetter }: { activeLetter: string | null }) {
  const lo = (l: string) => l === activeLetter ? 1 : 0.15;
  const ao = (l: string) => l === activeLetter ? 1 : 0.18;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 210 216" width="100%" height="100%">
      {/* Outer dashed ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 4" opacity="0.15"/>
      {/* Inner rings */}
      <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
      <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
      {/* Fill */}
      <circle cx="100" cy="100" r="63" fill="rgba(0,0,0,0.15)"/>
      {/* Sun rays */}
      <g stroke="white" strokeWidth="1" opacity="0.25">
        <line x1="100" y1="55" x2="100" y2="42"/>
        <line x1="115" y1="57" x2="121" y2="45"/>
        <line x1="128" y1="64" x2="137" y2="55"/>
        <line x1="136" y1="76" x2="148" y2="70"/>
        <line x1="85"  y1="57" x2="79"  y2="45"/>
        <line x1="72"  y1="64" x2="63"  y2="55"/>
        <line x1="64"  y1="76" x2="52"  y2="70"/>
      </g>
      {/* Sun */}
      <circle cx="100" cy="75" r="16" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
      {/* Mountains */}
      <polygon points="68,135 100,80 132,135" fill="white" opacity="0.25"/>
      <polygon points="100,135 125,95 150,135" fill="white" opacity="0.15"/>
      <polygon points="50,135 72,105 92,135" fill="white" opacity="0.1"/>
      {/* North arrow — P */}
      <polygon points="100,10 93,32 107,32" fill="#C9A96E" opacity={ao('P')}/>
      {/* South arrow — C */}
      <polygon points="100,190 93,168 107,168" fill="#C9A96E" opacity={ao('C')}/>
      {/* West arrow — E */}
      <polygon points="10,100 32,93 32,107" fill="#C9A96E" opacity={ao('E')}/>
      {/* East arrow — I */}
      <polygon points="190,100 168,93 168,107" fill="#C9A96E" opacity={ao('I')}/>
      {/* Labels */}
      <text x="100" y="8"   textAnchor="middle" fontFamily="serif" fontSize={activeLetter==='P'?14:10} fontWeight="bold" fill="white" opacity={lo('P')}>P</text>
      <text x="100" y="199" textAnchor="middle" fontFamily="serif" fontSize={activeLetter==='C'?14:10} fontWeight="bold" fill="white" opacity={lo('C')}>C</text>
      <text x="7"   y="104" textAnchor="middle" fontFamily="serif" fontSize={activeLetter==='E'?14:10} fontWeight="bold" fill="white" opacity={lo('E')}>E</text>
      <text x="193" y="104" textAnchor="middle" fontFamily="serif" fontSize={activeLetter==='I'?14:10} fontWeight="bold" fill="white" opacity={lo('I')}>I</text>
    </svg>
  );
}

export default function CompassTeam() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeMember = MEMBERS.find(m => m.id === selected) ?? null;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Compass diagram */}
      <div className="relative w-full max-w-[480px] aspect-square">
        {/* Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 480">
          {MEMBERS.map(m => {
            const c = LINE_COORDS[m.dir];
            const isActive = m.id === selected;
            return (
              <line key={m.id} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                stroke={isActive ? m.color : '#d1d5db'}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? '7 3' : '5 4'}
                style={{ transition: 'all 0.35s' }}
              />
            );
          })}
        </svg>

        {/* Center — full EPIC compass logo on dark navy */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-2xl"
          style={{ width: 120, height: 120, backgroundColor: '#1B3A6B' }}
        >
          <CompassLogo activeLetter={activeMember?.compassLetter ?? null} />
        </div>

        {/* Member avatars */}
        {MEMBERS.map(m => (
          <div key={m.id} style={POS_STYLE[m.dir]} className="flex flex-col items-center gap-1.5 z-20 relative">
            <motion.button
              onClick={() => setSelected(prev => prev === m.id ? null : m.id)}
              className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg border-2 border-white"
              style={{ backgroundColor: m.color }}
              animate={{ scale: selected === m.id ? 1.18 : 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              whileHover={{ scale: selected === m.id ? 1.18 : 1.08 }}
            >
              {m.initial}
            </motion.button>
            <span className="text-xs font-bold text-[#0f1e3c] whitespace-nowrap">{m.name}</span>
          </div>
        ))}
      </div>

      {/* Hint */}
      <AnimatePresence>
        {!selected && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-xs text-gray-400">
            Cliquez sur un membre pour en savoir plus
          </motion.p>
        )}
      </AnimatePresence>

      {/* Detail card */}
      <AnimatePresence mode="wait">
        {activeMember && (
          <motion.div
            key={activeMember.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl bg-white rounded-2xl border shadow-sm overflow-hidden"
            style={{ borderColor: activeMember.color + '40' }}
          >
            <div className="h-1.5" style={{ backgroundColor: activeMember.color }} />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0"
                  style={{ backgroundColor: activeMember.color }}>
                  {activeMember.initial}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1e3c]">{activeMember.name}</h3>
                  <p className="text-sm font-medium" style={{ color: activeMember.color }}>{activeMember.role}</p>
                  <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: activeMember.color }}>
                    {activeMember.pole}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{activeMember.bio}</p>
              {activeMember.details && (
                <ul className="space-y-1.5 mb-5">
                  {activeMember.details.map(d => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: activeMember.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-xs font-semibold border-t border-gray-100 pt-3" style={{ color: activeMember.color }}>
                {activeMember.tags}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
