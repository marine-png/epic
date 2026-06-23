'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

interface PoleItem {
  id: number;
  title: string;
  icon: string;
  color: string;
  badge: string;
  content: string;
  services: string[];
  href: string;
}

const polesData: PoleItem[] = [
  {
    id: 1,
    title: 'Entreprise',
    icon: '🏢',
    color: '#1B3A6B',
    badge: 'Acquisition & Stratégie',
    content: 'Accompagnement des entrepreneurs dans la création, reprise et développement de leur entreprise en France.',
    services: ['Business plan & financement', 'Structuration juridique', 'Stratégie & organisation'],
    href: '/entreprise',
  },
  {
    id: 2,
    title: 'Patrimoine',
    icon: '📊',
    color: '#2D6A4F',
    badge: 'Gestion & Fiscalité',
    content: 'Optimisation et valorisation de votre patrimoine avec une approche personnalisée et une expertise fiscale.',
    services: ['Optimisation fiscale', 'Transmission & succession', 'Investissements'],
    href: '/patrimoine',
  },
  {
    id: 3,
    title: 'Immobilier',
    icon: '🏠',
    color: '#C9601A',
    badge: 'Professionnel & Privé',
    content: 'Recherche, acquisition et investissement immobilier professionnel et privé en France.',
    services: ['Locaux commerciaux', 'Fonds de commerce', 'Investissement locatif'],
    href: '/immobilier',
  },
];

export default function RadialOrbitalTimeline() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    const id = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.4) % 360);
    }, 50);
    return () => clearInterval(id);
  }, [autoRotate]);

  const getNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 130;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(rad)) / 2)));
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    return { x, y, opacity, zIndex };
  };

  const handleNodeClick = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
      setAutoRotate(true);
    } else {
      setActiveId(id);
      setAutoRotate(false);
    }
  };

  const activeItem = polesData.find((p) => p.id === activeId);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
      style={{ height: 420 }}
      onClick={(e) => {
        if (e.target === containerRef.current) {
          setActiveId(null);
          setAutoRotate(true);
        }
      }}
    >
      {/* Centre */}
      <div className="absolute z-10 flex flex-col items-center justify-center w-20 h-20">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B] via-[#C9A96E] to-[#C9601A] animate-pulse flex items-center justify-center shadow-lg shadow-[#C9A96E]/30">
          <div className="absolute w-20 h-20 rounded-full border border-[#C9A96E]/20 animate-ping opacity-60" />
          <div className="w-8 h-8 rounded-full bg-white/90" />
        </div>
        <p className="text-[10px] text-white/50 mt-1 tracking-widest uppercase">EPIC</p>
      </div>

      {/* Orbite */}
      <div className="absolute w-72 h-72 rounded-full border border-white/10" />

      {/* Noeuds */}
      {polesData.map((pole, index) => {
        const pos = getNodePosition(index, polesData.length);
        const isActive = activeId === pole.id;

        return (
          <div
            key={pole.id}
            className="absolute transition-all duration-500 cursor-pointer"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              zIndex: isActive ? 200 : pos.zIndex,
              opacity: isActive ? 1 : pos.opacity,
            }}
            onClick={(e) => { e.stopPropagation(); handleNodeClick(pole.id); }}
          >
            {/* Halo */}
            <div
              className="absolute rounded-full"
              style={{
                width: 60, height: 60,
                top: -10, left: -10,
                background: `radial-gradient(circle, ${pole.color}40 0%, transparent 70%)`,
              }}
            />

            {/* Icône */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 border-2 ${isActive ? 'scale-150 shadow-lg' : ''}`}
              style={{
                backgroundColor: isActive ? pole.color : '#0f1e3c',
                borderColor: isActive ? pole.color : `${pole.color}80`,
              }}
            >
              {pole.icon}
            </div>

            {/* Label */}
            <p className={`absolute top-11 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold transition-all duration-300 ${isActive ? 'text-white scale-125' : 'text-white/60'}`}>
              {pole.title}
            </p>

            {/* Carte détail */}
            {isActive && (
              <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-56 bg-[#0a1628]/95 backdrop-blur-lg border-white/20 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40" />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <Badge className="text-white border-white/30 bg-transparent text-[10px]">{pole.badge}</Badge>
                  </div>
                  <CardTitle>{pole.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-white/70 space-y-3">
                  <p>{pole.content}</p>
                  <ul className="space-y-1">
                    {pole.services.map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: pole.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-1 text-[10px] border-white/20 hover:bg-white/10"
                    onClick={(e) => { e.stopPropagation(); window.location.href = pole.href; }}
                  >
                    En savoir plus <ArrowRight size={10} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        );
      })}

      {/* Hint si rien de sélectionné */}
      {!activeId && (
        <p className="absolute bottom-4 text-[10px] text-white/30 tracking-widest uppercase">Cliquez sur un pôle</p>
      )}
    </div>
  );
}
