import Link from "next/link";

import styles from "./ProjectsList.module.css";

export const ProjectsList = () => {
  return <ul className={styles.projectsList}>
    <li className={styles.item}>
      <h2>BRSL Events</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href="/projects/brsl-events"><a className="link link-secondary">Read More</a></Link>
    </li>
    <li className={styles.item}>
      <h2>neilsmith.fyi</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href="/projects/neilsmith-fyi"><a className="link link-secondary">Read More</a></Link>
    </li>
    <li className={styles.item}>
      <h2>KYSEK</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href="/projects/kysek"><a className="link link-secondary">Read More</a></Link>
    </li>
    <li className={styles.item}>
      <h2>The Healthy Cooking Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href="/projects/the-healthy-cooking-blog"><a className="link link-secondary">Read More</a></Link>
    </li>
    <li className={styles.item}>
      <h2>EBRPHA</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href="/projects/ebrpha"><a className="link link-secondary">Read More</a></Link>
    </li>
  </ul>;
};