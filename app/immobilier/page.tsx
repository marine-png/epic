import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBanner from '../components/SectionBanner';
import ProcessSteps from '../components/ProcessSteps';
import ServicesTabs from '../components/ServicesTabs';
import TeamSection from '../components/TeamSection';

export const metadata: Metadata = {
  title: 'EPIC – Conseil en immobilier professionnel et investissement en France',
  description: "EPIC accompagne entrepreneurs et investisseurs dans leurs projets immobiliers en France : locaux commerciaux, fonds de commerce, investissements locatifs et résidences secondaires.",
};

const COLOR = '#C9601A';

const services = [
  {
    title: "Immobilier professionnel",
    desc: "Pour les entrepreneurs et investisseurs actifs, nous proposons un accompagnement complet dans la recherche et l'acquisition de locaux commerciaux et fonds de commerce, avec nos conseillers en entreprise pour sécuriser vos projets et structurer vos investissements.",
    bullets: [
      "Identification de biens adaptés à votre activité",
      "Analyse du marché immobilier local et régional",
      "Négociation et sécurisation des acquisitions",
      "Accompagnement juridique et stratégique",
    ],
  },
  {
    title: "Immobilier pour investissement",
    desc: "Pour les investisseurs privés, nous vous aidons à structurer et sécuriser vos placements immobiliers en France, en complément de notre expertise en gestion patrimoniale pour optimiser vos investissements et votre fiscalité.",
    bullets: [
      "Acquisition de biens locatifs, résidences secondaires ou immeubles de rapport",
      "Analyse de rentabilité et planification financière",
      "Suivi et conseil stratégique pour sécuriser vos investissements",
      "Optimisation fiscale spécifique à l'investissement immobilier",
    ],
  },
];

const steps = [
  { num: "01", title: "Prise de contact", desc: "Vous nous expliquez votre projet et vos objectifs immobiliers.", cta: { label: "Demander un rendez-vous", href: "/contact" } },
  { num: "02", title: "Analyse de vos besoins", desc: "Définition précise du type de bien (professionnel ou investissement), localisation et budget." },
  { num: "03", title: "Recherche et sélection", desc: "Identification des biens adaptés à votre projet immobilier." },
  { num: "04", title: "Acquisition et suivi", desc: "Accompagnement dans la négociation, la sécurisation juridique et le suivi stratégique de votre projet." },
];

export default function ImmobilierPage() {
  return (
    <>
      <SectionBanner
        color={COLOR}
        label="Pôle Immobilier"
        title="Conseil et accompagnement en immobilier professionnel et investissement"
        description="EPIC accompagne entrepreneurs, investisseurs et porteurs de projets dans leurs projets immobiliers en France. Un suivi personnalisé et multilingue pour sécuriser vos acquisitions."
        cta={{ label: "Nous contacter pour votre projet immobilier", href: "/contact" }}
        activeLetter="I"
      />

      {/* Services */}
      <section className="py-20 text-white" style={{ backgroundColor: COLOR }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Nos services Immobilier</h2>
            <div className="w-12 h-1 bg-[#C9A96E]" />
          </div>
          <ServicesTabs services={services} color={COLOR} />
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-3 rounded hover:bg-[#e8d4a8] transition-colors">
              Planifiez votre accompagnement →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
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
        bgColor="#FDF3EC"
        label="Notre équipe"
        title="Notre experte Immobilier"
        experts={[
          {
            id: 'marine',
            initial: 'M',
            name: 'Marine',
            role: 'Experte en immobilier',
            desc: "Marine accompagne entrepreneurs, investisseurs et particuliers dans tous leurs projets immobiliers en France.",
            bullets: [
              "Expertise sur les locaux commerciaux et fonds de commerce",
              "Conseil en acquisition et investissement immobilier privé",
              "Suivi personnalisé et multilingue pour sécuriser vos projets",
            ],
            tags: 'Immobilier professionnel · Investissement · Acquisition · Multilingual',
            color: COLOR,
          },
        ]}
      />

      {/* CTA international */}
      <section className="py-20 text-white" style={{ backgroundColor: COLOR }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">International – Acheter un bien immobilier en France</h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Vous êtes un investisseur international et souhaitez acquérir un bien immobilier en France ? EPIC vous accompagne dans la recherche, l&apos;acquisition et la sécurisation de vos projets immobiliers, qu&apos;ils soient professionnels ou à vocation d&apos;investissement.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#C9601A] font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
