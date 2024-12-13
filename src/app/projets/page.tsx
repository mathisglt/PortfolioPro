"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './portfolio.module.css';

type BubbleKey = 'portfolio' | 'we' | 'react' | 'js' | 'pokedex' | 'perso' | 'amagg' | 'bingo'| 'todolist'| 'nextfood';
type Language = "Other" | "React" | "JavaScript" | "Angular" | "Vue.js" | "Next.js";
type Bubble = {
  name: string;
  subBubbles?: BubbleKey[];
  link?: string;
  disabled?: boolean;
  language?: Language;
};

const Portfolio = () => {
  // Initialisation avec uniquement 'portfolio'
  const [bubbleHistory, setBubbleHistory] = useState<BubbleKey[]>(['portfolio']);

  const activeBubble = bubbleHistory[bubbleHistory.length - 1];

  const bubbles: Record<BubbleKey, Bubble> = {
    portfolio: { name: 'Portfolio', subBubbles: ['we', 'perso'] },
    we: { name: 'Web Engineering \n Master 1', subBubbles: ['react', 'js', 'pokedex','todolist'] },
    perso: { name: 'Projets Persos', subBubbles: ['amagg','bingo','nextfood'] },
    react: { name: 'Ma Bibliothèque', link: 'https://wetpreact.amadev.fr',language:"React" },
    js: { name: 'CanvArt ', link: 'https://wejs.amadev.fr',language:"JavaScript" },
    pokedex: { name: 'Pokedex ', link: 'https://pokedex.amadev.fr',language:"Angular" },
    todolist: { name: 'ToDoList', link: 'https://todolist.amadev.fr',language:"Vue.js" },
    bingo: { name: 'BingoLive \n En cours', disabled: true,language:"Next.js" },
    amagg: { name: 'Ama.gg ', link: 'https://amagg.mathisgaultier.fr',language:"Next.js" },
    nextfood: { name: 'NextFood ', link: 'https://nextfood.mathisgaultier.fr/',language:"Next.js" },
  };

  const explosionVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
        scale: { duration: 0.2 }
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const handleBubbleClick = (bubbleKey: BubbleKey) => {
    const bubble = bubbles[bubbleKey];
    if (bubble.link) {
      window.location.href = bubble.link;
    } else if (bubble.subBubbles && bubble.subBubbles.length > 0) {
      setBubbleHistory(prev => [...prev, bubbleKey]);
    }
  };

  const handleBack = () => {
    if (bubbleHistory.length > 1) {
      setBubbleHistory(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className={styles.mainContent}>
      <motion.div 
        className={styles.bubblesContainer}
        variants={{
          initial: {},
          animate: { 
            transition: { 
              staggerChildren: 0,
              delayChildren: 0
            } 
          }
        }}
        initial="initial"
        animate="animate"
      >
        {/* Afficher les sous-bulles de la bulle active */}
        {bubbles[activeBubble]?.subBubbles?.map((subBubble) => (
          <motion.div
            key={subBubble}
            className={`${styles.subBubble} ${bubbles[subBubble].disabled ? styles.disabled : ''}`}
            onClick={() => !bubbles[subBubble].disabled && handleBubbleClick(subBubble)}
            variants={explosionVariants}
            whileHover={!bubbles[subBubble].disabled ? { 
              scale: 1.1,
              transition: { delay: 0.2 }
            } : {}}
            whileTap={!bubbles[subBubble].disabled ? { scale: 0.9 } : {}}
          >
            {bubbles[subBubble]?.name}
            {bubbles[subBubble]?.language && (
              <span className={`${styles.languageBadge} ${styles[bubbles[subBubble].language?.toLowerCase().replace('.', '')]}`}>
                {bubbles[subBubble].language}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {bubbleHistory.length > 1 && (
        <motion.div
          className={styles.backButton}
          onClick={handleBack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Retour
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;