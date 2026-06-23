'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({ ...word, text: word.text.split('') }));
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { display: 'inline-block', opacity: 1, width: 'fit-content' },
        { duration: 0.3, delay: stagger(0.06), ease: 'easeInOut' }
      );
    }
  }, [isInView, animate]);

  return (
    <div className={cn('font-bold text-center', className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={idx} className="inline-block">
            {word.text.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, display: 'none' }}
                className={cn('text-white opacity-0 hidden', word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn('inline-block rounded-sm w-[3px] h-8 md:h-10 lg:h-14 bg-[#1B3A6B] ml-1 align-middle', cursorClassName)}
      />
    </div>
  );
};
