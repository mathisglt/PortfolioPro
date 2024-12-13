import styles from '../index.module.css';
import { FaGithub } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Contact</h1>
      <p>
        Vous pouvez me contacter via les moyens suivants :
      </p>
      <p>
        📧 Email : <a href="mailto:mathis.gaultier.pro@gmail.com">mathis.gaultier.pro@gmail.com</a>
      </p>
      <p>
        💼 LinkedIn : <a href="https://www.linkedin.com/in/mathis-gaultier-35500bzh/" target="_blank" rel="noopener noreferrer">Mon profil LinkedIn</a>
      </p>
      <p>
        <FaGithub size={24} />{' '}
        GitHub : <a href="https://github.com/mathisglt" target="_blank" rel="noopener noreferrer">mathisglt</a>
      </p>
    </div>
  );
};

export default ContactPage;