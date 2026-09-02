import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBanner from '../components/SectionBanner';
import ProcessSteps from '../components/ProcessSteps';
import ServicesTabs from '../components/ServicesTabs';
import TeamSection from '../components/TeamSection';

export const metadata: Metadata = {
  title: 'EPIC – Conseil en gestion de patrimoine et optimisation fiscale',
  description: "EPIC accompagne les particuliers dans la gestion de patrimoine en France : optimisation fiscale, transmission, succession et stratégie patrimoniale sur mesure.",
};

const COLOR = '#2D6A4F';

const services = [
  {
    title: "Gestion et optimisation de patrimoine",
    desc: "Nous réalisons une analyse complète de votre situation afin de construire une stratégie patrimoniale cohérente et performante.",
    bullets: [
      "Analyse globale de votre situation financière et patrimoniale",
      "Optimisation fiscale dans le respect du cadre légal",
      "Mise en place de stratégies personnalisées pour valoriser votre patrimoine",
    ],
    livrable: "Stratégie patrimoniale personnalisée.",
  },
  {
    title: "Transmission et succession",
    desc: "Nous vous accompagnons dans l'anticipation et l'organisation de la transmission de votre patrimoine.",
    bullets: [
      "Préparation de la transmission et des successions",
      "Optimisation fiscale de la succession",
      "Structuration des donations et protection des proches",
    ],
    livrable: "Plan de transmission structuré.",
  },
  {
    title: "Investissements et diversification",
    desc: "Nous vous aidons à structurer et diversifier votre patrimoine en fonction de vos objectifs et de votre profil.",
    bullets: [
      "Définition de stratégies d'investissement adaptées",
      "Sélection de solutions immobilières et financières",
      "Suivi et optimisation de votre portefeuille",
    ],
    livrable: "Plan d'investissement adapté à votre profil.",
  },
];

const steps = [
  { num: "01", title: "Prise de contact", desc: "Nous échangeons sur votre situation et vos objectifs patrimoniaux.", cta: { label: "Demander un rendez-vous", href: "/contact" } },
  { num: "02", title: "Analyse complète", desc: "Étude de votre situation financière, fiscale et patrimoniale." },
  { num: "03", title: "Stratégie personnalisée", desc: "Mise en place d'un plan d'action adapté pour optimiser votre patrimoine." },
  { num: "04", title: "Mise en œuvre et suivi", desc: "Accompagnement dans la durée avec ajustements réguliers selon votre situation et l'évolution du cadre fiscal." },
];

export default function PatrimoinePage() {
  return (
    <>
      <SectionBanner
        color={COLOR}
        label="Pôle Patrimoine"
        title="Conseil et gestion de patrimoine en France"
        description="EPIC accompagne les particuliers dans la gestion, l'optimisation et la sécurisation de leur patrimoine en France, avec une approche personnalisée et adaptée à vos objectifs."
        cta={{ label: "Nous contacter pour votre projet patrimonial", href: "/contact" }}
        activeLetter="P"
      />

      {/* Note exclusivité */}
      <section className="py-8 bg-[#EEFAF4] border-b border-[#2D6A4F]/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#2D6A4F] font-medium text-center">
            Notre accompagnement s&apos;adresse exclusivement aux ressortissants français, avec une parfaite maîtrise du cadre fiscal et juridique en France.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-3">Nos services Patrimoine</h2>
            <div className="w-12 h-1 bg-[#C9A96E]" />
          </div>
          <ServicesTabs
            services={services}
            color={COLOR}
            dark={false}
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200"
          />
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block font-bold px-8 py-3 rounded text-white transition-colors" style={{ backgroundColor: COLOR }}>
              Planifiez votre accompagnement →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="w-12 h-0.5 bg-[#C9A96E] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c]">Comment ça marche ?</h2>
          </div>
          <div className="flex justify-center">
            <ProcessSteps steps={steps} color={COLOR} />
          </div>
        </div>
      </section>

      <TeamSection
        accentColor={COLOR}
        bgColor="#EEFAF4"
        label="Notre équipe"
        title="Notre experte Patrimoine"
        experts={[
          {
            id: 'griet',
            initial: 'G',
            name: 'Griet',
            role: 'Experte en gestion de patrimoine et optimisation fiscale',
            desc: "Spécialiste de la gestion de patrimoine en France, Griet accompagne ses clients dans la structuration, l'optimisation fiscale et la transmission de leur patrimoine. Grâce à une approche personnalisée et rigoureuse, elle propose des solutions adaptées à chaque situation, en tenant compte des objectifs à court, moyen et long terme.",
            tags: 'Optimisation fiscale · Structuration patrimoniale · Investissements',
            color: COLOR,
          },
        ]}
      />

      {/* CTA international */}
      <section className="py-20 text-white" style={{ backgroundColor: COLOR }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Investir en France</h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Vous êtes un investisseur international souhaitant structurer et optimiser votre patrimoine en France ? EPIC vous accompagne dans la mise en place de stratégies adaptées au cadre fiscal français, ainsi que dans la gestion et le développement de vos actifs.
          </p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-3 rounded hover:bg-[#e8d4a8] transition-colors">
            Commencez votre projet →
          </Link>
        </div>
      </section>

      {/* Autres pôles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold text-[#0f1e3c] mb-8 text-center">Découvrez nos autres domaines d&apos;expertise</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/entreprise" className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EEF3FB] flex items-center justify-center text-xl">🏢</div>
              <div>
                <p className="font-semibold text-[#1B3A6B]">Entreprise</p>
                <p className="text-xs text-gray-500">Conseil et accompagnement entrepreneurial</p>
              </div>
            </Link>
            <Link href="/immobilier" className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#FDF3EC] flex items-center justify-center text-xl">🏠</div>
              <div>
                <p className="font-semibold text-[#C9601A]">Immobilier</p>
                <p className="text-xs text-gray-500">Immobilier professionnel et investissement</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
