import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <ul className={styles.liens}>
            <li>
              <Link href="/portfolio" className={styles.lien}>Portfolio</Link>
            </li>
            <li>
              <Link href="/about" className={styles.lien}>À propos</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className={styles.footer}>Gaultier Mathis</footer>
      </body>
    </html>
  );
};

export default Layout;
