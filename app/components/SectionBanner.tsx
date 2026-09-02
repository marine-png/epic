interface SectionBannerProps {
  color: string;
  label: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  activeLetter?: 'E' | 'P' | 'I' | 'C';
}

function CompassLogo({ activeLetter = 'E' }: { activeLetter?: 'E' | 'P' | 'I' | 'C' }) {
  const isActive = (l: string) => l === activeLetter;
  const letterOpacity = (l: string) => isActive(l) ? 1 : 0.15;
  const arrowOpacity = (l: string) => isActive(l) ? 1 : 0.15;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 210 216" width="100%" height="100%">
      {/* Outer dashed ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 4" opacity="0.15"/>
      {/* Inner rings */}
      <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
      <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
      {/* Fill */}
      <circle cx="100" cy="100" r="63" fill="rgba(0,0,0,0.15)"/>
      {/* Sun rays */}
      <g stroke="white" strokeWidth="1" opacity="0.25">
        <line x1="100" y1="55" x2="100" y2="42"/>
        <line x1="115" y1="57" x2="121" y2="45"/>
        <line x1="128" y1="64" x2="137" y2="55"/>
        <line x1="136" y1="76" x2="148" y2="70"/>
        <line x1="85" y1="57" x2="79" y2="45"/>
        <line x1="72" y1="64" x2="63" y2="55"/>
        <line x1="64" y1="76" x2="52" y2="70"/>
      </g>
      {/* Sun */}
      <circle cx="100" cy="75" r="16" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
      {/* Mountains */}
      <polygon points="68,135 100,80 132,135" fill="white" opacity="0.25"/>
      <polygon points="100,135 125,95 150,135" fill="white" opacity="0.15"/>
      <polygon points="50,135 72,105 92,135" fill="white" opacity="0.1"/>

      {/* North arrow — P */}
      <polygon points="100,10 93,32 107,32" fill="#C9A96E" opacity={arrowOpacity('P')}/>
      {/* South arrow — C */}
      <polygon points="100,190 93,168 107,168" fill="#C9A96E" opacity={arrowOpacity('C')}/>
      {/* West arrow — E */}
      <polygon points="10,100 32,93 32,107" fill="#C9A96E" opacity={arrowOpacity('E')}/>
      {/* East arrow — I */}
      <polygon points="190,100 168,93 168,107" fill="#C9A96E" opacity={arrowOpacity('I')}/>

      {/* Labels */}
      <text x="100" y="8" textAnchor="middle" fontFamily="serif" fontSize={isActive('P') ? 13 : 10} fontWeight="bold" fill="white" opacity={letterOpacity('P')}>P</text>
      <text x="100" y="199" textAnchor="middle" fontFamily="serif" fontSize={isActive('C') ? 13 : 10} fontWeight="bold" fill="white" opacity={letterOpacity('C')}>C</text>
      <text x="7" y="104" textAnchor="middle" fontFamily="serif" fontSize={isActive('E') ? 13 : 10} fontWeight="bold" fill="white" opacity={letterOpacity('E')}>E</text>
      <text x="193" y="104" textAnchor="middle" fontFamily="serif" fontSize={isActive('I') ? 13 : 10} fontWeight="bold" fill="white" opacity={letterOpacity('I')}>I</text>
    </svg>
  );
}

export default function SectionBanner({ color, label, title, description, cta, activeLetter }: SectionBannerProps) {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: color }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Gauche — texte */}
        <div className="flex-1 text-white">
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

        {/* Droite — logo boussole */}
        {activeLetter && (
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 opacity-90">
            <CompassLogo activeLetter={activeLetter} />
          </div>
        )}
      </div>

      {/* Séparateur droit */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
    </section>
  );
}
