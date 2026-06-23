import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EPIC – Découvrez notre équipe',
  description: "Découvrez l'équipe EPIC et notre approche pour accompagner vos projets en France.",
};

const team = [
  { initial: 'P', name: 'Pieter', role: 'Expert Entreprise – Acquisition & Développement', color: '#1B3A6B', bio: 'Franco-belge, 55 ans, ingénieur commercial de formation.', details: ["9 ans dans les services financiers d'une entreprise de construction cotée", "6 ans dirigeant d'un hôtel en France", "9 ans dirigeant-fondateur d'une entreprise de distribution de bières spéciales", "4 ans de conseil aux chefs d'entreprise"], specialites: 'Acquisition · Business plan · Financement · Stratégie & organisation', pole: 'Entreprise', poleColor: '#1B3A6B' },
  { initial: 'N', name: 'Nicolas', role: 'Expert Entreprise – Structuration & Stratégie', color: '#1B3A6B', bio: "Spécialisé dans l'accompagnement des entrepreneurs, Nicolas intervient sur la structuration juridique, la stratégie et le développement des projets.", specialites: 'Structuration juridique · Stratégie · Développement', pole: 'Entreprise', poleColor: '#1B3A6B' },
  { initial: 'G', name: 'Griet', role: 'Experte Patrimoine – Gestion patrimoniale & Fiscalité', color: '#2D6A4F', bio: 'Spécialiste en gestion patrimoniale et optimisation fiscale.', details: ["Accompagnement des particuliers et investisseurs pour sécuriser et valoriser leur patrimoine", "Expertise en transmission et succession"], specialites: 'Optimisation fiscale · Structuration patrimoniale · Investissements', pole: 'Patrimoine', poleColor: '#2D6A4F' },
  { initial: 'M', name: 'Marine', role: 'Experte Immobilier', color: '#C9601A', bio: "Spécialiste de l'immobilier professionnel et de l'investissement immobilier privé.", details: ["Recherche et acquisition de locaux commerciaux et fonds de commerce", "Accompagnement pour investisseurs nationaux et internationaux"], specialites: 'Immobilier professionnel · Investissement immobilier · Négociation', pole: 'Immobilier', poleColor: '#C9601A' },
];

export default function AProposPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0f1e3c] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-white/10 px-3 py-1 rounded mb-6 text-[#C9A96E]">Notre équipe</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rencontrez l&apos;équipe EPIC</h1>
          <p className="text-xl text-[#C9A96E] font-medium mb-6">Notre projet, c&apos;est votre réussite.</p>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl">EPIC est un groupe de spécialistes qui accompagne entrepreneurs, investisseurs et porteurs de projets dans la réussite de leurs projets en France.</p>
          <Link href="/entreprise" className="inline-block mt-8 border border-white/30 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors">Découvrez nos services →</Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      <section className="py-24 bg-gray-50" id="valeurs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-[#EEF3FB] flex items-center justify-center mb-5 text-xl">🔭</div><h2 className="text-lg font-bold text-[#0f1e3c] mb-3">Notre vision</h2><p className="text-sm text-gray-600 leading-relaxed">Nous croyons que chaque projet mérite une approche sur mesure. Votre succès est notre priorité.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-[#EEFAF4] flex items-center justify-center mb-5 text-xl">🎯</div><h2 className="text-lg font-bold text-[#0f1e3c] mb-3">Notre mission</h2><p className="text-sm text-gray-600 leading-relaxed">Accompagner nos clients de manière intégrée, en combinant nos expertises en entreprise, patrimoine et immobilier.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-[#FDF3EC] flex items-center justify-center mb-5 text-xl">⭐</div><h2 className="text-lg font-bold text-[#0f1e3c] mb-3">Nos valeurs</h2><ul className="space-y-2">{[{icon:'🤝',t:'Proximité',d:'Nous sommes à vos côtés à chaque étape.'},{icon:'🔍',t:'Transparence',d:'Des conseils clairs et sans surprise.'},{icon:'🎓',t:'Expertise',d:'Une équipe de spécialistes confirmés.'},{icon:'💡',t:'Innovation',d:'Solutions modernes et adaptées.'},{icon:'🏆',t:'Résultats',d:'Votre réussite est notre mesure de succès.'}].map((v)=><li key={v.t} className="flex items-center gap-3 text-sm text-gray-600"><span>{v.icon}</span><span><strong>{v.t}</strong> — {v.d}</span></li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] mb-4">Notre équipe</h2><div className="w-16 h-1 bg-[#C9A96E] mx-auto" /></div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0" style={{ backgroundColor: member.color }}>{member.initial}</div>
                  <div><h3 className="text-xl font-bold text-[#0f1e3c]">{member.name}</h3><p className="text-sm font-medium" style={{ color: member.color }}>{member.role}</p><span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: member.poleColor }}>{member.pole}</span></div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                {member.details && <ul className="space-y-1 mb-4">{member.details.map((d) => <li key={d} className="flex items-start gap-2 text-sm text-gray-500"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: member.color }} />{d}</li>)}</ul>}
                <p className="text-xs font-semibold border-t border-gray-200 pt-3" style={{ color: member.color }}>{member.specialites}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f1e3c] mb-4">Contactez-nous</h2>
          <p className="text-gray-500 mb-8">Nous serons ravis d&apos;échanger avec vous et de vous accompagner dans vos projets en France.</p>
          <Link href="/contact" className="inline-block bg-[#1B3A6B] text-white font-semibold px-8 py-3 rounded hover:bg-[#0f2347] transition-colors">Nous contacter →</Link>
        </div>
      </section>
    </>
  );
}
