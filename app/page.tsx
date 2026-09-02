'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from './components/SparklesCore';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';
import { FeatureCarousel } from './components/FeatureCarousel';
import { TypewriterEffect } from './components/TypewriterEffect';
import { Globe, BookOpen, Users, Lightbulb, Briefcase, TrendingUp, Building2 } from 'lucide-react';

const poles = [
  {
    href: '/entreprise',
    label: 'Entreprise',
    color: '#1B3A6B',
    lightColor: '#EEF3FB',
    Icon: Briefcase,
    services: [
      'Analyse de la faisabilité de votre projet',
      'Business plan et prévisionnel financier',
      'Structuration juridique',
      'Financement et accompagnement bancaire',
    ],
  },
  {
    href: '/patrimoine',
    label: 'Patrimoine',
    color: '#2D6A4F',
    lightColor: '#EEFAF4',
    Icon: TrendingUp,
    services: [
      'Gestion et optimisation de patrimoine',
      'Stratégie fiscale et financière',
      'Transmission et succession',
      'Accompagnement dédié aux ressortissants français',
    ],
  },
  {
    href: '/immobilier',
    label: 'Immobilier',
    color: '#C9601A',
    lightColor: '#FDF3EC',
    Icon: Building2,
    services: [
      'Recherche de locaux professionnels',
      'Acquisition de fonds de commerce',
      'Accompagnement sur vos investissements immobiliers',
    ],
  },
];

const atouts = [
  { title: 'Expertise pluridisciplinaire', desc: 'Une vision globale grâce à nos conseillers en entreprise, patrimoine et immobilier.' },
  { title: 'Accompagnement de A à Z', desc: "De l'idée à la réalisation, nous vous guidons à chaque étape." },
  { title: 'Équipe expérimentée et multilingue', desc: 'Un accompagnement adapté aux clients français et internationaux.' },
  { title: 'Approche personnalisée et réactive', desc: 'Des solutions sur mesure, adaptées à votre projet.' },
];

const articles = [
  { title: 'Investir en France', desc: "Comprendre les opportunités et structurer votre investissement.", color: '#1B3A6B' },
  { title: 'Commencer un business en France', desc: "Créer et développer votre entreprise avec une base solide.", color: '#2D6A4F' },
  { title: 'Acheter en France', desc: "Réussir votre acquisition immobilière professionnelle.", color: '#C9601A' },
];

const poleWords = [
  { word: 'Entreprise', color: '#C9A96E' },
  { word: 'Patrimoine', color: '#C9A96E' },
  { word: 'Immobilier', color: '#C9A96E' },
];

function AccordionItem({ title, desc }: { title: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center justify-between gap-6 py-6 text-left w-full"
      >
        <h3 className="font-semibold text-[#0f1e3c] text-base md:text-lg group-hover:text-[#1B3A6B] transition-colors">{title}</h3>
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E] transition-colors duration-200">
          <span className="text-gray-400 text-xl leading-none group-hover:text-[#C9A96E] transition-colors" style={{ lineHeight: 1 }}>{open ? '−' : '+'}</span>
        </div>
      </button>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-12">{desc}</p>
      )}
    </div>
  );
}

function AnimatedHeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % poleWords.length), 1400);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 uppercase">
      <span className="block">Vos conseillers en</span>
      <span className="relative block h-[1.2em] overflow-hidden">
        {poleWords.map((p, i) => (
          <motion.span
            key={p.word}
            className="absolute inset-0 flex items-center justify-start font-bold"
            style={{ color: p.color }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            animate={index === i ? { y: 0, opacity: 1 } : { y: index > i ? -60 : 60, opacity: 0 }}
          >
            {p.word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="min-h-screen bg-[#0f1e3c] text-white flex flex-col lg:flex-row items-center overflow-hidden lg:pt-20">
        {/* Gauche — texte + CTA */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 lg:pl-28 lg:pr-8 xl:pl-36 xl:pr-10 pt-40 pb-16 lg:py-0">
          <AnimatedHeroTitle />
          <p className="text-lg text-white/75 leading-relaxed mb-4 max-w-lg">
            Chez EPIC, nous accompagnons entrepreneurs et investisseurs dans leurs projets en France. Nos conseillers vous guident à chaque étape avec une approche globale, claire et personnalisée.
          </p>
          <p className="text-sm text-white/50 mb-10">Nous intervenons partout en France, auprès d&apos;une clientèle nationale et internationale.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-4 rounded hover:bg-[#e8d4a8] transition-colors">
              Nous contacter
            </Link>
            <Link href="/a-propos" className="border border-white/30 text-white font-medium px-8 py-4 rounded hover:bg-white/10 transition-colors">
              Notre équipe →
            </Link>
          </div>
        </div>

        {/* Droite — logo */}
        <div className="flex-1 flex items-center justify-center lg:justify-start relative py-20 lg:py-0 min-h-[50vh] lg:min-h-screen lg:pl-4 lg:pr-16 xl:pr-24">
          {/* Glow doré derrière le logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-[#C9A96E]/8 blur-3xl" />
          </div>
          <motion.img
            src="/logo-dark.svg"
            alt="EPIC Logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
            className="relative z-10 w-[300px] md:w-[400px] lg:w-[480px] xl:w-[540px]"
            style={{ filter: 'drop-shadow(0 0 80px rgba(201,169,110,0.35))' }}
          />
        </div>
      </section>

      {/* Pôles — cards */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-16 h-1 bg-[#C9A96E] mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] uppercase mb-14">Nos domaines d&apos;expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poles.map((pole, idx) => (
              <motion.div
                key={pole.href}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Link
                  href={pole.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col relative h-full"
                >
                  {/* Numéro décoratif */}
                  <span
                    className="absolute top-3 right-5 text-8xl font-bold select-none pointer-events-none leading-none"
                    style={{ color: pole.color, opacity: 0.05 }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Bande colorée en haut */}
                  <div className="h-[3px]" style={{ backgroundColor: pole.color }} />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icône */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: pole.lightColor }}
                    >
                      <pole.Icon size={26} style={{ color: pole.color }} strokeWidth={1.5} />
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl font-bold mb-3" style={{ color: pole.color }}>{pole.label}</h3>

                    {/* Séparateur */}
                    <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: pole.color + '50' }} />

                    {/* Services checklist */}
                    <div className="flex flex-col gap-3 flex-1">
                      {pole.services.map((s) => (
                        <div key={s} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: pole.lightColor }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1.5 5L4 7.5L8.5 2.5" stroke={pole.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-600 leading-snug">{s}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-200" style={{ color: pole.color }}>
                      En savoir plus <span>→</span>
                    </div>
                  </div>

                  {/* Gradient subtil en bas au hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl"
                    style={{ background: `linear-gradient(to top, ${pole.color}10, transparent)` }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      {/* Pourquoi nous choisir — FAQ layout */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Gauche */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="w-16 h-1 bg-[#C9A96E] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] uppercase leading-tight mb-6">
              Pourquoi nous<br />choisir ?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Chez EPIC, nous combinons expertise, réactivité et approche sur mesure pour chaque projet, en France et à l&apos;international.
            </p>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A6B] border border-[#1B3A6B]/30 px-6 py-3 rounded hover:bg-[#1B3A6B] hover:text-white transition-all duration-200"
            >
              Rencontrez notre équipe →
            </Link>
          </div>

          {/* Droite — accordéon */}
          <div className="flex-1 flex flex-col">
            {atouts.map((a) => (
              <AccordionItem key={a.title} title={a.title} desc={a.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Conseils */}
      <section className="py-10 bg-white">
        <FeatureCarousel />
      </section>

      {/* CTA final — Typewriter */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-2/3 h-0.5 bg-[#C9A96E] mx-auto mb-10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <p className="text-[#0f1e3c]/50 text-base md:text-lg tracking-wide">
            Un projet d&apos;entreprise, d&apos;investissement ou de gestion patrimoniale en France ?
          </p>
          <TypewriterEffect
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0f1e3c]"
            words={[
              { text: 'CONTACTEZ' },
              { text: 'NOS' },
              { text: 'EXPERTS', className: 'text-[#C9A96E]' },
              { text: 'POUR' },
              { text: 'VOTRE' },
              { text: 'PROJET', className: 'text-[#C9A96E]' },
            ]}
          />
          <Link
            href="/contact"
            className="inline-block bg-[#1B3A6B] text-white font-bold px-10 py-4 rounded hover:bg-[#0f2347] transition-colors text-lg mt-2"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
