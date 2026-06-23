'use client';
import { useId, useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import type { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: SparklesProps) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
  const generatedId = useId();
  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) controls.start({ opacity: 1, transition: { duration: 1.5 } });
  };

  return (
    <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
      <motion.div animate={controls} className={cn('opacity-0', className)}>
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || '#020817' } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: { onClick: { enable: true, mode: 'push' }, onHover: { enable: false, mode: 'repulse' } },
              modes: { push: { quantity: 4 } },
            },
            particles: {
              color: { value: particleColor || '#ffffff' },
              move: {
                enable: true,
                direction: 'none',
                speed: { min: 0.05, max: speed || 0.4 },
                outModes: { default: 'out' },
                random: true,
                straight: false,
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity || 200,
              },
              opacity: {
                value: { min: 0.05, max: 0.9 },
                animation: {
                  enable: true,
                  speed: speed || 2,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                  count: 0,
                  decay: 0,
                  delay: 0,
                },
              },
              shape: { type: 'circle' },
              size: {
                value: { min: minSize || 0.5, max: maxSize || 1.5 },
              },
            },
            detectRetina: true,
          }}
        />
      </motion.div>
    </ParticlesProvider>
  );
};
