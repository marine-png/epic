import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBanner from '../components/SectionBanner';

export const metadata: Metadata = {
  title: 'EPIC – Conseil en immobilier professionnel et investissement en France',
  description: "EPIC accompagne entrepreneurs et investisseurs dans leurs projets immobiliers en France.",
};

const COLOR = '#C9601A';

const services = [
  { title: "Immobilier professionnel", desc: "Pour les entrepreneurs et investisseurs actifs, nous proposons un accompagnement complet dans la recherche et l'acquisition de locaux commerciaux et fonds de commerce.", bullets: ["Identification de biens adaptés à votre activité", "Analyse du marché immobilier local et régional", "Négociation et sécurisation des acquisitions", "Accompagnement juridique et stratégique"], tag: "Entrepreneurs & Investisseurs actifs" },
  { title: "Immobilier pour investissement", desc: "Pour les investisseurs privés, nous vous aidons à structurer et sécuriser vos placements immobiliers en France.", bullets: ["Acquisition de biens locatifs, résidences secondaires ou immeubles de rapport", "Analyse de rentabilité et planification financière", "Suivi et conseil stratégique", "Optimisation fiscale spécifique à l'investissement immobilier"], tag: "Investisseurs privés" },
];

const steps = [
  { num: "01", title: "Prise de contact", desc: "Vous nous expliquez votre projet et vos objectifs immobiliers.", withCTA: true },
  { num: "02", title: "Analyse de vos besoins", desc: "Définition précise du type de bien, localisation et budget." },
  { num: "03", title: "Recherche et sélection", desc: "Identification des biens adaptés à votre projet immobilier." },
  { num: "04", title: "Acquisition et suivi", desc: "Accompagnement dans la négociation, la sécurisation juridique et le suivi stratégique." },
];

export default function ImmobilierPage() {
  return (
    <>
      <SectionBanner color={COLOR} label="Pôle Immobilier" title="Conseil et accompagnement en immobilier professionnel et investissement" description="EPIC accompagne entrepreneurs, investisseurs et porteurs de projets dans leurs projets immobiliers en France." cta={{ label: "Nous contacter pour votre projet immobilier", href: "/contact" }} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12"><h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-3">Nos services immobilier</h2><div className="w-12 h-1 bg-[#C9601A]" /></div>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((s) => (
              <div key={s.title} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <span className="inline-block bg-[#FDF3EC] text-[#C9601A] text-xs font-semibold px-3 py-1 rounded-full mb-4">{s.tag}</span>
                <h3 className="font-bold text-[#C9601A] text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">{s.bullets.map((b) => <li key={b} className="flex items-start gap-2 text-sm text-gray-500"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9601A] flex-shrink-0" />{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-12 text-center">Comment ça marche ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#C9601A] text-white flex items-center justify-center font-bold text-sm mb-4">{step.num}</div>
                <h3 className="font-bold text-[#0f1e3c] mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                {step.withCTA && <Link href="/contact" className="inline-block mt-3 text-xs font-semibold text-[#C9601A] border border-[#C9601A] px-3 py-1 rounded hover:bg-[#C9601A] hover:text-white transition-colors">Rendez-vous</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FDF3EC]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-10">Notre experte Immobilier</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C9601A] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">M</div>
              <div>
                <h3 className="text-xl font-bold text-[#0f1e3c]">Marine</h3>
                <p className="text-sm text-[#C9601A] font-medium mb-4">Experte en immobilier</p>
                <p className="text-sm text-gray-600 leading-relaxed">Marine accompagne entrepreneurs, investisseurs et particuliers dans tous leurs projets immobiliers en France.</p>
                <ul className="mt-4 space-y-1">{["Expertise sur les locaux commerciaux et fonds de commerce", "Conseil en acquisition et investissement immobilier privé", "Suivi personnalisé et multilingue"].map((item) => <li key={item} className="flex items-start gap-2 text-sm text-gray-500"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9601A] flex-shrink-0" />{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#C9601A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">International – Acheter un bien immobilier en France</h2>
          <p className="text-white/75 mb-8 leading-relaxed">Vous êtes un investisseur international et souhaitez acquérir un bien immobilier en France ? EPIC vous accompagne dans la recherche, l&apos;acquisition et la sécurisation de vos projets immobiliers.</p>
          <Link href="/contact" className="inline-block bg-white text-[#C9601A] font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">Nous contacter →</Link>
        </div>
      </section>
    </>
  );
}
