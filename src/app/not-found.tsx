import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Non Trouvée</h2>
      <p className={styles.description}>
        Désolé, la page que vous recherchez n&apos;existe pas.
      </p>
      <Link href="/" className={styles.homeButton}>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
} 