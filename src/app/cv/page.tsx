"use client";
import { motion } from 'framer-motion';
import styles from './about.module.css';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const skills = {
    web: {
      frontend: ['JavaScript', 'TypeScript', 'React', 'NextJs', 'Angular', 'Vue'],
      backend: ['NodeJs', 'Express', 'NestJS']
    },
    software: {
      languages: ['Java', 'Python', 'Scala', 'C'],
      tools: ['Git', 'SQL', 'Linux', 'Docker', 'PostgreSQL', 'MonetDB']
    }
  };

  const education = [
    {
      title: "Master 1 Ingénierie Logicielle",
      institution: "Université de Rennes",
      period: "2024-2026",
      status: "En cours"
    },
    {
      title: "Licence Informatique",
      institution: "Université de Rennes",
      period: "2021-2024",
      mention: "Mention Assez Bien"
    },
    {
      title: "Baccalauréat Général",
      institution: "Spécialités NSI & Mathématiques",
      period: "2018-2021",
      mention: "Mention Très Bien"
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <motion.div 
        className={styles.glitchContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.glitchText} data-text="Gaultier Mathis">Gaultier Mathis</h2>
        <div className={styles.subtitle}>Développeur Full Stack & Développeur Logiciel</div>
        <div className={styles.buttonContainer}>
          <motion.a 
            href="/gaultiermathiscv.pdf" 
            download="Gaultier Mathis CV" 
            className={styles.downloadLink}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
          <motion.a 
            href="https://github.com/mathisglt" 
            className={styles.githubLink}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </motion.a>
        </div>

        <div className={styles.jobSearchContainer}>
          <p>
            Je suis actuellement à la recherche d&apos;opportunités de stage et/ou d&apos;alternance dans le développement logiciel et web. Passionné par le développement, je suis enthousiaste à l&apos;idée de mettre mes compétences en pratique et de contribuer à des projets innovants. N&apos;hésitez pas à me contacter si vous avez des opportunités à me proposer !
          </p>
        </div>
      </motion.div>

      <div className={styles.mainContent}>
        <motion.section 
          className={styles.formationSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={styles.sectionTitle}>Formation</h2>
          <div className={styles.educationContainer}>
            {education.map((edu, index) => (
              <motion.div 
                key={edu.title}
                className={styles.educationCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={styles.eduTitle}>{edu.title}</div>
                <div className={styles.eduInstitution}>{edu.institution}</div>
                <div className={styles.eduPeriod}>{edu.period}</div>
                {edu.mention && <div className={styles.eduMention}>{edu.mention}</div>}
                {edu.status && <div className={styles.eduStatus}>{edu.status}</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.skillsSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={styles.sectionTitle}>Compétences</h2>
          <div className={styles.skillsContainer}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Développement Logiciel</h3>
              <div className={styles.skillBox}>
                <h4 className={styles.skillTitle}>Langages</h4>
                <div className={styles.techStack}>
                  {skills.software.languages.map((tech) => (
                    <div key={tech} className={`${styles.techItem} ${styles[tech.toLowerCase()]}`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.skillBox}>
                <h4 className={styles.skillTitle}>Outils</h4>
                <div className={styles.techStack}>
                  {skills.software.tools.map((tech) => (
                    <div key={tech} className={`${styles.techItem} ${styles[tech.toLowerCase()]}`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Développement Web</h3>
              <div className={styles.skillBox}>
                <h4 className={styles.skillTitle}>Frontend</h4>
                <div className={styles.techStack}>
                  {skills.web.frontend.map((tech) => (
                    <div key={tech} className={`${styles.techItem} ${styles[tech.toLowerCase()]}`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.skillBox}>
                <h4 className={styles.skillTitle}>Backend</h4>
                <div className={styles.techStack}>
                  {skills.web.backend.map((tech) => (
                    <div key={tech} className={`${styles.techItem} ${styles[tech.toLowerCase()]}`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;