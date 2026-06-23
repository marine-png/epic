interface SectionBannerProps {
  color: string;
  label: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

export default function SectionBanner({ color, label, title, description, cta }: SectionBannerProps) {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: color }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-4xl mx-auto px-6 text-white">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-white/20 px-3 py-1 rounded mb-6">
          {label}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">{description}</p>
        {cta && (
          <a href={cta.href} className="inline-block mt-8 bg-white text-gray-900 font-semibold px-7 py-3 rounded hover:bg-gray-100 transition-colors">
            {cta.label}
          </a>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  );
}
