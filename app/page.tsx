import Link from 'next/link';
import Image from 'next/image';

const poles = [
  { href: '/entreprise', label: 'Entreprise', color: '#1B3A6B', lightColor: '#EEF3FB', icon: '🏢', services: ['Analyse de la faisabilité de votre projet', 'Business plan et prévisionnel financier', 'Structuration juridique', 'Financement et accompagnement bancaire'] },
  { href: '/patrimoine', label: 'Patrimoine', color: '#2D6A4F', lightColor: '#EEFAF4', icon: '📊', services: ['Gestion et optimisation de patrimoine', 'Stratégie fiscale et financière', 'Transmission et succession', 'Accompagnement dédié aux ressortissants français'] },
  { href: '/immobilier', label: 'Immobilier', color: '#C9601A', lightColor: '#FDF3EC', icon: '🏠', services: ['Recherche de locaux professionnels', 'Acquisition de fonds de commerce', 'Accompagnement sur vos investissements immobiliers'] },
];

const atouts = [
  { title: 'Expertise pluridisciplinaire', desc: 'Une vision globale grâce à nos conseillers en entreprise, patrimoine et immobilier.' },
  { title: 'Accompagnement de A à Z', desc: "De l'idée à la réalisation, nous vous guidons à chaque étape." },
  { title: 'Équipe expérimentée et multilingue', desc: 'Un accompagnement adapté aux clients français et internationaux.' },
  { title: 'Approche personnalisée et réactive', desc: 'Des solutions sur mesure, adaptées à votre projet.' },
];

const articles = [
  { title: 'Investir en France', desc: 'Comprendre les opportunités et structurer votre investissement.', color: '#1B3A6B' },
  { title: 'Commencer un business en France', desc: 'Créer et développer votre entreprise avec une base solide.', color: '#2D6A4F' },
  { title: 'Acheter en France', desc: 'Réussir votre acquisition immobilière professionnelle.', color: '#C9601A' },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#0f1e3c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3c] via-[#1B3A6B] to-[#0f2347]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(circle at 80% 50%, #C9A96E 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#C9A96E]">Entreprise · Patrimoine · Immobilier · Conseil</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Vos conseillers en Entreprise, Patrimoine et Immobilier<span className="text-[#C9A96E]"> en France</span></h1>
            <p className="text-lg text-white/75 leading-relaxed mb-4">Chez EPIC, nous accompagnons entrepreneurs et investisseurs dans leurs projets en France. Nos conseillers vous guident à chaque étape avec une approche globale, claire et personnalisée.</p>
            <p className="text-sm text-white/55 mb-10">Nous intervenons partout en France, auprès d&apos;une clientèle nationale et internationale.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#C9A96E] text-[#0f1e3c] font-bold px-8 py-4 rounded hover:bg-[#e8d4a8] transition-colors">Nous contacter</Link>
              <Link href="/a-propos" className="border border-white/30 text-white font-medium px-8 py-4 rounded hover:bg-white/10 transition-colors">Notre équipe →</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/logo.svg" alt="EPIC" width={320} height={320} className="opacity-90 drop-shadow-2xl" priority />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl" style={{ backgroundColor: pole.lightColor }}>{pole.icon}</div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: pole.color }}>{pole.label}</h3>
                  <ul className="space-y-2 mb-8">
                    {pole.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pole.color }} />{s}
                      </li>
                    ))}
                  </ul>
                  <Link href={pole.href} className="text-sm font-semibold transition-colors" style={{ color: pole.color }}>En savoir plus →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] mb-4">Pourquoi nous choisir ?</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atouts.map((a, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-bold mb-5 text-sm">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-bold text-[#0f1e3c] mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/a-propos" className="inline-block border-2 border-[#1B3A6B] text-[#1B3A6B] font-semibold px-8 py-3 rounded hover:bg-[#1B3A6B] hover:text-white transition-colors">Rencontrez notre équipe →</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e3c] mb-4">Nos conseils pour vos projets en France</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="h-36 relative flex items-center justify-center" style={{ backgroundColor: a.color }}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative text-white/20 text-8xl font-black select-none">EPIC</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0f1e3c] mb-2 text-lg">{a.title}</h3>
                  <p className="text-sm text-gray-500">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1B3A6B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #C9A96E 0%, transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez nos experts pour votre projet en France</h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">Un projet d&apos;entreprise, d&apos;investissement ou de gestion patrimoniale en France ?<br />Notre équipe vous accompagne avec une approche claire et personnalisée.</p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] text-[#0f1e3c] font-bold px-10 py-4 rounded hover:bg-[#e8d4a8] transition-colors text-lg">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}
