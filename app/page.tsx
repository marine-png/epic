'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from './components/SparklesCore';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';
import { FeatureGrid } from './components/FeatureGrid';
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

function AnimatedHeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % poleWords.length), 2500);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 uppercase">
      <span className="block">Vos conseillers en</span>
      <span className="relative block h-[1.2em] overflow-hidden">
        {poleWords.map((p, i) => (
          <motion.span
            key={p.word}
            className="absolute inset-0 flex items-center justify-center font-bold"
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
      {/* Hero centré */}
      <section className="pt-40 pb-28 bg-[#0f1e3c] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedHeroTitle />
          <p className="text-lg text-white/75 leading-relaxed mb-4">
            Chez EPIC, nous accompagnons entrepreneurs et investisseurs dans leurs projets en France. Nos conseillers vous guident à chaque étape avec une approche globale, claire et personnalisée.
          </p>
          <p className="text-sm text-white/50 mb-10">Nous intervenons partout en France, auprès d&apos;une clientèle nationale et internationale.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-4 rounded hover:bg-[#e8d4a8] transition-colors">
              Nous contacter
            </Link>
            <Link href="/a-propos" className="border border-white/30 text-white font-medium px-8 py-4 rounded hover:bg-white/10 transition-colors">
              Notre équipe →
            </Link>
          </div>
        </div>
      </section>

      {/* Pôles détaillés */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Nos expertises</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c]">Nos domaines d&apos;expertise</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-20 mt-10 flex flex-col gap-0 divide-y divide-gray-100">
          {poles.map((pole) => (
            <Link
              key={pole.href}
              href={pole.href}
              className="group flex flex-col md:flex-row md:items-center gap-6 py-8 transition-all duration-300 hover:pl-4"
            >
              {/* Icône + barre colorée */}
              <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                <div className="w-1 h-12 rounded-full flex-shrink-0 transition-all duration-300 group-hover:h-16" style={{ backgroundColor: pole.color }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: pole.lightColor }}>
                  <pole.Icon size={22} style={{ color: pole.color }} strokeWidth={1.5} />
                </div>
              </div>

              {/* Titre */}
              <div className="md:w-48 flex-shrink-0">
                <h3 className="text-2xl font-bold transition-opacity" style={{ color: pole.color }}>
                  {pole.label}
                </h3>
              </div>

              {/* Services */}
              <div className="flex-1 flex flex-wrap gap-2">
                {pole.services.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300"
                    style={{ color: pole.color, borderColor: pole.color + '40', backgroundColor: pole.lightColor }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Flèche */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                style={{ borderColor: pole.color + '40', color: pole.color }}
              >
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <FeatureGrid
        sectionTitle="Pourquoi nous choisir ?"
        sectionDescription=""
        features={[
          { Icon: Globe, title: 'Expertise pluridisciplinaire', description: 'Une vision globale grâce à nos conseillers en entreprise, patrimoine et immobilier.' },
          { Icon: BookOpen, title: 'Accompagnement de A à Z', description: "De l'idée à la réalisation, nous vous guidons à chaque étape." },
          { Icon: Users, title: 'Équipe expérimentée et multilingue', description: 'Un accompagnement adapté aux clients français et internationaux.' },
          { Icon: Lightbulb, title: 'Approche personnalisée et réactive', description: 'Des solutions sur mesure, adaptées à votre projet.' },
        ]}
        footer={
          <Link href="/a-propos" className="inline-block border-2 border-[#1B3A6B] text-[#1B3A6B] font-semibold px-8 py-3 rounded hover:bg-[#1B3A6B] hover:text-white transition-colors">
            Rencontrez notre équipe →
          </Link>
        }
      />

      {/* Blog / Conseils */}
      <section className="py-24 bg-white">
        <FeatureCarousel />
      </section>

      {/* CTA final — Typewriter */}
      <section className="py-28 bg-[#0f1e3c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,169,110,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <p className="text-white/60 text-base md:text-lg tracking-wide">
            Un projet d&apos;entreprise, d&apos;investissement ou de gestion patrimoniale en France ?
          </p>
          <TypewriterEffect
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
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
            className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-10 py-4 rounded hover:bg-[#e8d4a8] transition-colors text-lg mt-2"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
