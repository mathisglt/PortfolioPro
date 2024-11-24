"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './portfolio.module.css';

type BubbleKey = 'portfolio' | 'we' | 'react' | 'js' | 'pokedex' | 'perso' | 'amagg';

type Bubble = {
  name: string;
  subBubbles?: BubbleKey[];
  link?: string;
};

const Portfolio = () => {
  const [activeBubble, setActiveBubble] = useState<BubbleKey | null>(null);

  const bubbles: Record<BubbleKey, Bubble> = {
    portfolio: { name: 'Portfolio', subBubbles: ['we', 'perso'] },
    we: { name: 'Web Engineering \n Master 1', subBubbles: ['react', 'js', 'pokedex'] },
    react: { name: 'React', link: 'https://wetpreact.amadev.fr' },
    js: { name: 'Dessin \n (JavaScript pur)', link: 'https://wejs.amadev.fr' },
    pokedex: { name: 'Pokedex \n (Angular)', link: 'https://pokedex.amadev.fr' },
    perso: { name: 'Projets Persos', subBubbles: ['amagg'] },
    amagg: { name: 'Ama.gg (Next.js)', link: 'https://amagg.mathisgaultier.fr' },
  };

  const explosionVariants = {
    initial: { opacity: 0, scale: 0.5, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 10 } },
    exit: { opacity: 0, scale: 0.5, y: -50, transition: { duration: 0.3 } },
  };

  const handleBubbleClick = (bubbleKey: BubbleKey) => {
    const bubble = bubbles[bubbleKey];
    if (bubble.link) {
      window.location.href = bubble.link;
    } else {
      setActiveBubble(bubbleKey);
    }
  };

  const renderSubBubbles = (bubbleKey: BubbleKey) => {
    const bubble = bubbles[bubbleKey];
    return (
      <div className={styles.bubblesContainer}>
        {bubble.subBubbles?.map((subBubble) => (
          <motion.div
            key={subBubble}
            className={styles.subBubble}
            onClick={() => handleBubbleClick(subBubble)}
            variants={explosionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {bubbles[subBubble]?.name}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.mainContent}>
      {/* Main Bubble Display */}
      {!activeBubble && (
        <>
          <motion.div
            className={styles.bubble}
            onClick={() => handleBubbleClick('portfolio')}
            variants={explosionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {bubbles.portfolio.name}
          </motion.div>
          <h1>Cliquez pour parcourir</h1>
        </>
      )}

      {/* Sub-Bubbles Display */}
      {activeBubble && renderSubBubbles(activeBubble)}

      {/* Back Button */}
      {activeBubble && (
        <motion.div
          className={styles.backButton}
          onClick={() => setActiveBubble(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Retour
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;