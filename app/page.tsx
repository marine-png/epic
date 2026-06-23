'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from './components/SparklesCore';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';
import { FeatureGrid } from './components/FeatureGrid';
import { FeatureCarousel } from './components/FeatureCarousel';
import { Globe, BookOpen, Users, Lightbulb } from 'lucide-react';

const poles = [
  {
    href: '/entreprise',
    label: 'Entreprise',
    color: '#1B3A6B',
    lightColor: '#EEF3FB',
    icon: '🏢',
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
    icon: '📊',
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
    icon: '🏠',
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
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Vos conseillers en{' '}
      <span className="relative inline-flex justify-start overflow-hidden" style={{ minWidth: '16ch', verticalAlign: 'bottom' }}>
        {poleWords.map((p, i) => (
          <motion.span
            key={p.word}
            className="absolute font-bold"
            style={{ color: p.color }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            animate={index === i ? { y: 0, opacity: 1 } : { y: index > i ? -60 : 60, opacity: 0 }}
          >
            {p.word}
          </motion.span>
        ))}
        <span className="invisible">{poleWords[0].word}</span>
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Sparkles — galaxie plein écran */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: '#020817' }}>
        <SparklesCore
          className="absolute inset-0 w-full h-full"
          background="#020817"
          particleColor="#ffffff"
          particleDensity={180}
          minSize={0.4}
          maxSize={1.2}
          speed={0.5}
        />
        {/* Lueur bleue horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.3) 0%, transparent 70%)',
        }} />
        <div className="absolute pointer-events-none" style={{
          bottom: '28%', left: '10%', right: '10%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,179,255,0.5) 25%, rgba(186,230,255,1) 50%, rgba(99,179,255,0.5) 75%, transparent)',
          boxShadow: '0 0 24px 6px rgba(99,179,255,0.35)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 100%, rgba(15,30,80,0.6) 0%, transparent 80%)',
        }} />

        {/* EPIC centré */}
        <div className="relative z-10 text-center select-none flex flex-col items-center gap-3">
          <h1
            className="font-black text-white"
            style={{
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              lineHeight: 1,
              letterSpacing: '0.08em',
              textShadow: '0 0 120px rgba(255,255,255,0.06)',
            }}
          >
            EPIC
          </h1>
          <p style={{
            color: '#C9A96E',
            fontWeight: 600,
            letterSpacing: '0.42em',
            fontSize: 'clamp(0.55rem, 1vw, 0.8rem)',
            textTransform: 'uppercase',
          }}>
            Entreprise · Patrimoine · Immobilier · Conseil
          </p>
        </div>
      </section>

      {/* Hero 2 colonnes */}
      <section className="py-20 bg-[#0f1e3c] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Texte gauche */}
          <div>
            <AnimatedHeroTitle />
            <p className="text-lg text-white/75 leading-relaxed mb-4">
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

          {/* Orbital droite */}
          <div className="flex items-center justify-center">
            <RadialOrbitalTimeline />
          </div>
        </div>
      </section>

      {/* Pôles détaillés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] mb-4">Nos domaines d&apos;expertise</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poles.map((pole) => (
              <div key={pole.href} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-2" style={{ backgroundColor: pole.color }} />
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl" style={{ backgroundColor: pole.lightColor }}>
                    {pole.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: pole.color }}>{pole.label}</h3>
                  <ul className="space-y-2 mb-8">
                    {pole.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pole.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href={pole.href} className="text-sm font-semibold transition-colors" style={{ color: pole.color }}>
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
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

      {/* CTA final */}
      <section className="py-24 bg-[#1B3A6B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #C9A96E 0%, transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contactez nos experts pour votre projet en France
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Un projet d&apos;entreprise, d&apos;investissement ou de gestion patrimoniale en France ?<br />
            Notre équipe vous accompagne avec une approche claire et personnalisée.
          </p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-10 py-4 rounded hover:bg-[#e8d4a8] transition-colors text-lg">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
