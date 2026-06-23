import Link from 'next/link';
import Image from 'next/image';

const poles = [
  { href: '/entreprise', label: 'Entreprise' },
  { href: '/patrimoine', label: 'Patrimoine' },
  { href: '/immobilier', label: 'Immobilier' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1e3c] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.svg" alt="EPIC" width={44} height={44} className="brightness-0 invert opacity-80" />
            <span className="text-lg font-bold tracking-widest text-white uppercase">EPIC</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">Entreprise · Patrimoine · Immobilier · Conseil</p>
          <p className="text-sm text-gray-400 mt-2">Notre projet, c&apos;est votre réussite.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nos pôles</h3>
          <ul className="space-y-2">
            {poles.map((p) => (
              <li key={p.href}><Link href={p.href} className="text-sm text-gray-400 hover:text-white transition-colors">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">À propos</h3>
          <ul className="space-y-2">
            <li><Link href="/a-propos" className="text-sm text-gray-400 hover:text-white transition-colors">Notre équipe</Link></li>
            <li><Link href="/a-propos#valeurs" className="text-sm text-gray-400 hover:text-white transition-colors">Nos valeurs</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="mailto:contact@epi-conseil.com" className="hover:text-white transition-colors">contact@epi-conseil.com</a></li>
            <li>France</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EPIC – Entreprise, Patrimoine, Immobilier, Conseil. Tous droits réservés.
      </div>
    </footer>
  );
}
