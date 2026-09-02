'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

interface Step {
  num: string;
  title: string;
  desc: string;
  cta?: { label: string; href: string };
}

function StepItem({ step, color, isLast }: { step: Step; color: string; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-5% 0px -38% 0px' });

  return (
    <div ref={ref} className="flex gap-6 relative pb-8 last:pb-0">
      {/* Ligne verticale avec remplissage animé */}
      {!isLast && (
        <div className="absolute left-6 top-12 -translate-x-1/2 w-0.5 h-[calc(100%-48px)] bg-gray-200 overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full origin-top"
            style={{ backgroundColor: color }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      )}

      {/* Bulle numérotée */}
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-2"
        animate={{
          backgroundColor: isInView ? color : 'transparent',
          borderColor: isInView ? color : '#d1d5db',
          color: isInView ? '#ffffff' : '#9ca3af',
          scale: isInView ? [1, 1.18, 1] : 1,
        }}
        transition={{ duration: 0.35, type: 'spring', stiffness: 280, damping: 18 }}
      >
        {step.num}
      </motion.div>

      {/* Contenu */}
      <motion.div
        className="flex-1 bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
        animate={{ opacity: isInView ? 1 : 0.4, x: isInView ? 0 : 10 }}
        transition={{ duration: 0.35, delay: 0.08 }}
      >
        <h3 className="font-bold text-[#0f1e3c] mb-1">{step.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
        {step.cta && (
          <Link
            href={step.cta.href}
            className="inline-block mt-3 text-xs font-semibold border px-4 py-1.5 rounded transition-all duration-200 hover:text-white"
            style={{ color, borderColor: color + '50' }}
          >
            {step.cta.label}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

export default function ProcessSteps({ steps, color }: { steps: Step[]; color: string }) {
  return (
    <div className="max-w-2xl">
      {steps.map((step, idx) => (
        <StepItem key={step.num} step={step} color={color} isLast={idx === steps.length - 1} />
      ))}
    </div>
  );
}
