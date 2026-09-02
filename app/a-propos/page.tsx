import type { Metadata } from 'next';
import Link from 'next/link';
import CompassTeam from '../components/CompassTeam';
import ChainSection from '../components/ChainSection';

export const metadata: Metadata = {
  title: 'EPIC – Découvrez notre équipe',
  description: "Découvrez l'équipe EPIC, notre philosophie et notre approche pour accompagner vos projets d'entreprise, patrimoine et immobilier en France.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero — fond doré, texte navy */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: '#C9A96E' }}>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-[#0f1e3c]/15 px-3 py-1 rounded mb-6 text-[#0f1e3c]">Notre équipe</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f1e3c]">Rencontrez l&apos;équipe EPIC</h1>
          <p className="text-xl font-medium mb-6 text-[#0f1e3c]/80">Notre projet, c&apos;est votre réussite.</p>
          <p className="text-lg text-[#0f1e3c]/70 leading-relaxed max-w-2xl">
            EPIC est un groupe de spécialistes qui accompagne entrepreneurs, investisseurs et porteurs de projets dans la réussite de leurs projets en France. Notre approche est personnalisée, pluridisciplinaire et orientée résultats.
          </p>
          <Link href="/entreprise" className="inline-block mt-8 border border-[#0f1e3c]/40 text-[#0f1e3c] font-medium px-6 py-3 rounded hover:bg-[#0f1e3c]/10 transition-colors">
            Découvrez nos services →
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0f1e3c]/15" />
      </section>

      {/* Chaîne interactive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A96E]">Notre identité</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mt-3 mb-3">Ce qui nous définit</h2>
            <div className="w-12 h-1 bg-[#C9A96E] mx-auto" />
          </div>
          <ChainSection />
        </div>
      </section>

      {/* Équipe — boussole interactive */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] mb-4">Notre équipe</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto" />
          </div>
          <CompassTeam />
        </div>
      </section>

      {/* CTA — fond doré */}
      <section className="py-16 text-center" style={{ backgroundColor: '#C9A96E' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f1e3c] mb-4">Parlons de votre projet</h2>
          <p className="text-[#0f1e3c]/70 mb-8">Nous serons ravis d&apos;échanger avec vous et de vous accompagner dans vos projets en France.</p>
          <Link href="/contact" className="inline-block bg-[#0f1e3c] text-white font-semibold px-8 py-3 rounded hover:bg-[#1a2f54] transition-colors">
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
