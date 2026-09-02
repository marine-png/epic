import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBanner from '../components/SectionBanner';
import ProcessSteps from '../components/ProcessSteps';
import ServicesTabs from '../components/ServicesTabs';

export const metadata: Metadata = {
  title: 'Conseil en Entreprise en France – EPIC',
  description: 'EPIC guide les entrepreneurs et porteurs de projets à chaque étape de la création, acquisition ou développement d\'entreprise en France.',
};

const COLOR = '#1B3A6B';

const services = [
  {
    title: "Étude de faisabilité",
    desc: "Nous analysons la cohérence globale de votre projet avant toute prise de décision. Cela inclut l'évaluation du prix d'acquisition en lien avec les performances financières (bilan, compte de résultat) et la réalité du marché.",
    livrable: "Synthèse claire avec recommandations.",
  },
  {
    title: "Financement",
    desc: "Nous évaluons en amont votre capacité à obtenir un financement afin de sécuriser votre projet. Cette analyse permet d'engager vos démarches (compromis, négociation) avec une vision réaliste.",
    livrable: "Synthèse financière et recommandations.",
  },
  {
    title: "Business plan & prévisionnel financier",
    desc: "Nous construisons des prévisionnels financiers complets et structurés (société d'exploitation, SCI, holding si nécessaire) pour vos demandes de financement.",
    bullets: ["Analyse de la viabilité du projet", "Simulation de rentabilité", "Construction du plan de financement"],
    livrable: "Prévisionnels détaillés accompagnés d'un document explicatif.",
  },
  {
    title: "Accompagnement bancaire",
    desc: "Nous vous aidons à présenter un dossier solide et convaincant auprès des banques et des investisseurs.",
    bullets: ["Préparation du dossier de financement", "Assistance lors des rendez-vous bancaires", "Optimisation du plan de financement"],
  },
  {
    title: "Création d'entreprise",
    desc: "Nous vous accompagnons dans le choix de la structure juridique la plus adaptée à votre projet et à vos objectifs.",
  },
  {
    title: "Développement d'entreprise",
    desc: "Nous intervenons dans la structuration et la croissance de votre activité.",
    bullets: ["Organisation et stratégie", "Optimisation des performances", "Suivi opérationnel"],
  },
];

const steps = [
  { num: "01", title: "Prise de contact", desc: "Vous nous présentez votre projet et vos objectifs.", cta: { label: "Demander un rendez-vous", href: "/contact" } },
  { num: "02", title: "Analyse du projet", desc: "Étude de faisabilité et validation de la cohérence globale." },
  { num: "03", title: "Négociation (option)", desc: "Accompagnement dans la négociation du prix d'acquisition." },
  { num: "04", title: "Business plan & financement", desc: "Construction du prévisionnel et du plan de financement." },
  { num: "05", title: "Mise en œuvre et suivi", desc: "Accompagnement opérationnel et conseils stratégiques pour sécuriser votre projet." },
];

export default function EntreprisePage() {
  return (
    <>
      <SectionBanner
        color={COLOR}
        label="Pôle Entreprise"
        title="Conseil et accompagnement pour votre entreprise en France"
        description="EPIC accompagne les entrepreneurs et porteurs de projets à chaque étape de l'acquisition, de la création ou du développement d'entreprise en France."
        cta={{ label: "Nous contacter pour votre projet", href: "/contact" }}
        activeLetter="E"
      />

      {/* Approche */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Gauche */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="w-10 h-0.5 bg-[#C9A96E] mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] leading-tight mb-5">Une approche gagnant-gagnant</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nous travaillons avec des partenaires de confiance — notaires, banques, experts-comptables — pour sécuriser et accélérer votre projet à chaque étape.
              </p>
            </div>
            {/* Droite — liste numérotée */}
            <div className="flex-1 divide-y divide-gray-100">
              {[
                { num: "01", title: "Des honoraires maîtrisés", desc: "Une entrée en relation transparente, sans surprise, avec des frais clairs dès le départ." },
                { num: "02", title: "Une rémunération alignée sur le succès", desc: "Nos intérêts sont alignés sur les vôtres : nous réussissons ensemble." },
                { num: "03", title: "Une démarche claire et rassurante", desc: "Un processus structuré, progressif, conçu pour vous guider sans vous perdre." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-7 py-7 first:pt-0 last:pb-0">
                  <span className="text-3xl font-bold text-[#C9A96E] tabular-nums flex-shrink-0 leading-none mt-0.5">{item.num}</span>
                  <div>
                    <p className="text-base font-bold text-[#0f1e3c] mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0f1e3c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Nos services pour votre entreprise</h2>
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

      {/* Experts */}
      <section className="py-20 bg-[#EEF3FB]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1e3c] mb-12">Nos experts Entreprise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-bold text-xl mb-5">P</div>
              <h3 className="text-lg font-bold text-[#0f1e3c]">Pieter</h3>
              <p className="text-sm text-[#1B3A6B] font-medium mb-4">Expert en acquisition et développement</p>
              <p className="text-sm text-gray-600 mb-4">Franco-belge, 55 ans, ingénieur commercial de formation, Pieter dispose d'une solide expérience en gestion, finance et entrepreneuriat.</p>
              <ul className="space-y-1">
                {["9 ans dans les services financiers d'une entreprise de construction cotée", "6 ans dirigeant d'un hôtel en France", "9 ans dirigeant-fondateur d'une entreprise de distribution", "4 ans en conseil auprès de chefs d'entreprise"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1B3A6B] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#1B3A6B] font-semibold">Acquisition · Développement · Stratégie · Vente</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-bold text-xl mb-5">N</div>
              <h3 className="text-lg font-bold text-[#0f1e3c]">Nicolas</h3>
              <p className="text-sm text-[#1B3A6B] font-medium mb-4">Expert en structuration et stratégie</p>
              <p className="text-sm text-gray-600">Spécialisé dans l'accompagnement des entrepreneurs, Nicolas intervient sur la structuration juridique, la stratégie et le développement des projets. Il accompagne chaque client avec une approche personnalisée, en tenant compte des enjeux financiers, organisationnels et humains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA international */}
      <section className="py-20 bg-[#1B3A6B] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Démarrer un projet en France</h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Vous êtes un investisseur ou entrepreneur international et souhaitez créer ou acquérir une entreprise en France ? EPIC vous accompagne à chaque étape pour sécuriser votre implantation, structurer votre projet et faciliter vos démarches administratives et financières.
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
            <Link href="/patrimoine" className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EEFAF4] flex items-center justify-center text-xl">📊</div>
              <div>
                <p className="font-semibold text-[#2D6A4F]">Patrimoine</p>
                <p className="text-xs text-gray-500">Gestion et optimisation de patrimoine</p>
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
