'use client';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-[#0f1e3c] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-white/10 px-3 py-1 rounded mb-6 text-[#C9A96E]">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez l&apos;équipe EPIC dès maintenant</h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl">Vous avez un projet d&apos;entreprise, un investissement patrimonial ou immobilier en France ? Remplissez le formulaire ci-dessous et notre équipe d&apos;experts vous accompagnera dans toutes les étapes.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-[#0f1e3c] mb-8">Formulaire de contact</h2>
            {sent ? (
              <div className="bg-[#EEFAF4] border border-[#2D6A4F]/20 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#2D6A4F] mb-2">Message envoyé !</h3>
                <p className="text-gray-600">Notre équipe vous répondra sous 24 à 48 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Nom et prénom <span className="text-red-500">*</span></label><input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors" placeholder="Jean Dupont" /></div>
                  <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label><input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors" placeholder="jean@exemple.fr" /></div>
                </div>
                <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone <span className="text-red-500">*</span></label><input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors" placeholder="+33 6 00 00 00 00" /></div>
                <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message / Description du projet <span className="text-red-500">*</span></label><textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors resize-none" placeholder="Décrivez votre projet ou votre question..." /></div>
                <button type="submit" className="w-full bg-[#1B3A6B] text-white font-semibold py-4 rounded-lg hover:bg-[#0f2347] transition-colors">Envoyer ma demande</button>
                <p className="text-xs text-gray-400 text-center">Vos informations sont traitées en toute confidentialité.</p>
              </form>
            )}
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#0f1e3c]">Autres moyens de contact</h2>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-[#EEF3FB] flex items-center justify-center flex-shrink-0">✉️</div><div><p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Email</p><a href="mailto:contact@epi-conseil.com" className="text-sm font-semibold text-[#1B3A6B] hover:underline">contact@epi-conseil.com</a></div></div>
              <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-[#EEF3FB] flex items-center justify-center flex-shrink-0">📍</div><div><p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Zone d&apos;intervention</p><p className="text-sm font-semibold text-[#0f1e3c]">Toute la France</p><p className="text-xs text-gray-400">Clientèle nationale & internationale</p></div></div>
              <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-[#EEF3FB] flex items-center justify-center flex-shrink-0">🕐</div><div><p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Délai de réponse</p><p className="text-sm font-semibold text-[#0f1e3c]">24 à 48 heures</p></div></div>
            </div>
            <div className="bg-[#0f1e3c] text-white rounded-2xl p-6"><p className="text-sm font-semibold text-[#C9A96E] mb-2">Notre promesse</p><p className="text-sm text-white/75 leading-relaxed">Nous traitons chaque projet avec confidentialité et un suivi personnalisé.</p></div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-500">Nos pôles d&apos;expertise</p>
              {[{ label: 'Entreprise', color: '#1B3A6B', href: '/entreprise' }, { label: 'Patrimoine', color: '#2D6A4F', href: '/patrimoine' }, { label: 'Immobilier', color: '#C9601A', href: '/immobilier' }].map((p) => (
                <a key={p.label} href={p.href} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} /><span className="text-sm font-medium text-gray-700">{p.label}</span><span className="ml-auto text-gray-300 text-xs">→</span></a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
