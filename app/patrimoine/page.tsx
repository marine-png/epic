import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBanner from '../components/SectionBanner';

export const metadata: Metadata = {
  title: 'EPIC – Conseil en gestion de patrimoine et optimisation fiscale',
  description: "EPIC accompagne les particuliers dans la gestion de patrimoine en France.",
};

const COLOR = '#2D6A4F';

const services = [
  { title: "Gestion et optimisation de patrimoine", desc: "Nous réalisons une analyse complète de votre situation afin de construire une stratégie patrimoniale cohérente et performante.", bullets: ["Analyse globale de votre situation financière et patrimoniale", "Optimisation fiscale dans le respect du cadre légal", "Mise en place de stratégies personnalisées pour valoriser votre patrimoine"] },
  { title: "Transmission et succession", desc: "Nous vous accompagnons dans l'anticipation et l'organisation de la transmission de votre patrimoine.", bullets: ["Préparation de la transmission et des successions", "Optimisation fiscale de la succession", "Structuration des donations et protection des proches"] },
  { title: "Investissements et diversification", desc: "Nous vous aidons à structurer et diversifier votre patrimoine en fonction de vos objectifs et de votre profil.", bullets: ["Définition de stratégies d'investissement adaptées", "Sélection de solutions immobilières et financières", "Suivi et optimisation de votre portefeuille"] },
];

const steps = [
  { num: "01", title: "Prise de contact", desc: "Nous échangeons sur votre situation et vos objectifs patrimoniaux.", withCTA: true },
  { num: "02", title: "Analyse complète", desc: "Étude de votre situation financière, fiscale et patrimoniale." },
  { num: "03", title: "Stratégie personnalisée", desc: "Mise en place d'un plan d'action adapté pour optimiser votre patrimoine." },
  { num: "04", title: "Mise en œuvre et suivi", desc: "Accompagnement dans la durée avec ajustements réguliers." },
];

export default function PatrimoinePage() {
  return (
    <>
      <SectionBanner color={COLOR} label="Pôle Patrimoine" title="Conseil et gestion de patrimoine en France" description="EPIC accompagne les particuliers dans la gestion, l'optimisation et la sécurisation de leur patrimoine en France." cta={{ label: "Nous contacter pour votre projet patrimonial", href: "/contact" }} />

      <section className="py-8 bg-[#EEFAF4] border-b border-[#2D6A4F]/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#2D6A4F] font-medium text-center">Notre accompagnement s&apos;adresse exclusivement aux ressortissants français, avec une parfaite maîtrise du cadre fiscal et juridique en France.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12"><h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-3">Nos services Patrimoine</h2><div className="w-12 h-1 bg-[#2D6A4F]" /></div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="w-1 h-8 rounded bg-[#2D6A4F] mb-4" />
                <h3 className="font-bold text-[#2D6A4F] mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">{s.bullets.map((b) => <li key={b} className="flex items-start gap-2 text-sm text-gray-500"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D6A4F] flex-shrink-0" />{b}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10"><Link href="/contact" className="inline-block bg-[#2D6A4F] text-white font-semibold px-8 py-3 rounded hover:bg-[#1f4d39] transition-colors">Planifiez votre accompagnement →</Link></div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-12 text-center">Comment ça marche ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-sm mb-4">{step.num}</div>
                <h3 className="font-bold text-[#0f1e3c] mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                {step.withCTA && <Link href="/contact" className="inline-block mt-3 text-xs font-semibold text-[#2D6A4F] border border-[#2D6A4F] px-3 py-1 rounded hover:bg-[#2D6A4F] hover:text-white transition-colors">Rendez-vous</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EEFAF4]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-10">Notre experte en Patrimoine</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">G</div>
              <div>
                <h3 className="text-xl font-bold text-[#0f1e3c]">Griet</h3>
                <p className="text-sm text-[#2D6A4F] font-medium mb-4">Experte en gestion de patrimoine et optimisation fiscale</p>
                <p className="text-sm text-gray-600 leading-relaxed">Spécialiste de la gestion de patrimoine en France, Griet accompagne ses clients dans la structuration, l&apos;optimisation fiscale et la transmission de leur patrimoine.</p>
                <p className="mt-4 text-xs text-[#2D6A4F] font-semibold">Optimisation fiscale · Structuration patrimoniale · Investissements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2D6A4F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Investir en France</h2>
          <p className="text-white/75 mb-8 leading-relaxed">Vous êtes un investisseur international souhaitant structurer et optimiser votre patrimoine en France ? EPIC vous accompagne dans la mise en place de stratégies adaptées au cadre fiscal français.</p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-3 rounded hover:bg-[#e8d4a8] transition-colors">Commencez votre projet →</Link>
        </div>
      </section>
    </>
  );
}
