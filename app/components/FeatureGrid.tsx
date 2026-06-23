'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ Icon, title, description, className }, ref) => {
    const titleId = React.useId();
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-start gap-4 p-6 rounded-2xl border border-[#1B3A6B]/10 bg-white/60 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#1B3A6B]/30 hover:bg-white/80',
          className
        )}
        aria-labelledby={titleId}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#1B3A6B]/20 bg-[#EEF3FB]">
          <Icon className="h-6 w-6 text-[#1B3A6B]" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <h3 id={titleId} className="text-lg font-bold leading-none tracking-tight text-[#0f1e3c]">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = 'FeatureCard';

interface FeatureGridProps {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
  className?: string;
  footer?: React.ReactNode;
}

export const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ sectionTitle, sectionDescription, features, className, footer }, ref) => {
    const titleId = React.useId();
    return (
      <section ref={ref} className={cn('w-full py-20 bg-gray-50', className)} aria-labelledby={titleId}>
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 id={titleId} className="text-3xl font-bold tracking-tight text-[#0f1e3c] sm:text-4xl uppercase">
              {sectionTitle}
            </h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4" />
            {sectionDescription && (
              <p className="mt-5 text-gray-500 md:text-lg">{sectionDescription}</p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          {footer && <div className="text-center mt-12">{footer}</div>}
        </div>
      </section>
    );
  }
);
FeatureGrid.displayName = 'FeatureGrid';
