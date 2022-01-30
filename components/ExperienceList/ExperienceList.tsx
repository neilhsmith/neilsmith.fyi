import styles from "./ExperienceList.module.css";

export const ExperienceList = () => {
  return <ul className={styles.experienceList}>
    <li className={styles.item}>
      <article className={styles.job}>
        <h2>Otey White &amp; Associates</h2>
        <time>2016 - Present</time>
        <p>Build, maintain and manage dozens of brocure and e-commerce sites built primarly with WordPress.</p>
      </article>
    </li>
    <li className={styles.item}>
      <article className={styles.job}>
        <h2>Envoc</h2>
        <time>2014 - 2016</time>
        <p>Worked with Angular to build the Web front-end for several internal business applications for a nation-wide client.</p>
      </article>
    </li>
    <li className={styles.item}>
      <article className={styles.job}>
        <h2>ITI Technical College</h2>
        <time>2013 - 2014</time>
        <p>Developed Windows applications to help the Financial Aid department reporting obligations.</p>
      </article>
    </li>
  </ul>
};