// app/page.tsx
import styles from './index.module.css';

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Bienvenue sur mon portfolio !</h1>
      <p>
        Je suis Gaultier Mathis, étudiant passionné par le développement web et logiciel.
      </p>
      <p>
        Je vous invite à découvrir <a href="/portfolio">mes projets</a> et mon parcours à travers <a href="/about">mon CV</a>.
      </p>
      <p>
        Pour les projets Logiciels hors du Web, vous pouvez en trouver quelques-uns sur <a href="https://github.com/mathisglt">mon GitHub</a>.
      </p>
    </div>
  );
};

export default HomePage;
