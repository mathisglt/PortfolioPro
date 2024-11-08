"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './portfolio.module.css';

type BubbleKey = 'portfolio' | 'we' | 'react' | 'js' | 'pokedex';

type Bubble = {
  name: string;
  subBubbles?: BubbleKey[];
  link?: string;
}

const Portfolio = () => {
  const [activeBubble, setActiveBubble] = useState<BubbleKey | null>(null);

  const bubbles: Record<BubbleKey, Bubble> = {
    portfolio: { name: 'Portfolio', subBubbles: ['we'] },
    we: { name: 'WE', subBubbles: ['react', 'js', 'pokedex'] },
    react: { name: 'React', link: 'https://wetpreact.amadev.fr' },
    js: { name: 'JS', link: 'https://wejs.amadev.fr' },
    pokedex: { name: 'Pokedex', link: 'https://pokedex.amadev.fr' },
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

  return (
    <div className={styles.mainContent}>
      {/* Affichage de la bulle principale */}
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
          <h1>Clique sur moi</h1> {/* Affiché uniquement si aucune bulle n'est active */}
        </>
      )}

      {/* Affichage des sous-bulles pour "Portfolio" */}
      {activeBubble === 'portfolio' && (
        <div className={styles.bubblesContainer}>
          {bubbles.portfolio.subBubbles?.map((subBubble) => (
            <motion.div
              key={subBubble}
              className={styles.subBubble}
              onClick={() => handleBubbleClick(subBubble as BubbleKey)}
              variants={explosionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {bubbles[subBubble]?.name}
            </motion.div>
          ))}
        </div>
      )}

      {/* Affichage des sous-bulles pour "WE" */}
      {activeBubble === 'we' && (
        <div className={styles.bubblesContainer}>
          {bubbles.we.subBubbles?.map((subBubble) => (
            <motion.div
              key={subBubble}
              className={styles.subBubble}
              onClick={() => handleBubbleClick(subBubble as BubbleKey)}
              variants={explosionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {bubbles[subBubble]?.name}
            </motion.div>
          ))}
        </div>
      )}

      {/* Bouton de retour */}
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
