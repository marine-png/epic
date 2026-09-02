'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Step {
  num: string;
  title: string;
  desc: string;
  cta?: { label: string; href: string };
}

export default function ProcessSteps({ steps, color }: { steps: Step[]; color: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {steps.map((step, idx) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.1 }}
          className="relative bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden p-7 flex flex-col gap-3"
        >
          {/* Accent coloré en haut */}
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: color }} />

          {/* Numéro fantôme en fond */}
          <span
            className="absolute bottom-2 right-4 text-8xl font-black leading-none select-none pointer-events-none"
            style={{ color, opacity: 0.05 }}
          >
            {step.num}
          </span>

          {/* Badge étape */}
          <span
            className="self-start text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: color + '18', color }}
          >
            {step.num}
          </span>

          <h3 className="font-bold text-[#0f1e3c] text-lg leading-snug">{step.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>

          {step.cta && (
            <Link
              href={step.cta.href}
              className="self-start mt-2 text-xs font-semibold border px-4 py-2 rounded transition-all duration-200 hover:text-white"
              style={{ color, borderColor: color + '50' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; }}
            >
              {step.cta.label}
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
