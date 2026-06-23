'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/entreprise', label: 'Entreprise', color: 'hover:text-[#1B3A6B]' },
  { href: '/patrimoine', label: 'Patrimoine', color: 'hover:text-[#2D6A4F]' },
  { href: '/immobilier', label: 'Immobilier', color: 'hover:text-[#C9601A]' },
  { href: '/a-propos', label: 'À propos', color: 'hover:text-[#C9A96E]' },
  { href: '/contact', label: 'Contact', color: 'hover:text-[#C9A96E]' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="EPIC" width={52} height={52} />
          <span className="text-xl font-bold tracking-widest text-[#1B3A6B] uppercase">EPIC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium text-gray-700 transition-colors ${l.color}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#1B3A6B] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#0f2347] transition-colors">
            Nous contacter
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#1B3A6B] text-white text-sm font-semibold px-5 py-2.5 rounded text-center" onClick={() => setOpen(false)}>
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  );
}
