import Link from "next/link";
import Image from "next/image";

import styles from "./ProjectsList.module.css";

export const ProjectsList = () => {
  return (
    <ul className={styles.projectsList}>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <Image
              src="/brsl-events-1.png"
              layout="responsive"
              width={877}
              height={724}
            />
          </div>
          <div className={styles.back}>
            <h2 className={styles.title}>BRSL Events</h2>
            <p className={styles.descrip}>
              A WordPress plugin which allows users to purchase and assign seats
              for annual events.
            </p>
            <Link href="/projects/brsl-events">
              <a className={styles.link}>Read More</a>
            </Link>
          </div>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <Image
              src="/neilsmith-fyi-877.png"
              layout="responsive"
              width={877}
              height={713}
            />
          </div>
          <div className={styles.back}>
            <h2 className={styles.title}>neilsmith.fyi</h2>
            <p className={styles.descrip}>
              Well... this site. A static site generated with Next.js.
            </p>
            <Link href="/projects/neilsmith-fyi">
              <a className={styles.link}>Read More</a>
            </Link>
          </div>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <Image
              src="/kysek-home-877.png"
              layout="responsive"
              width={877}
              height={718}
            />
          </div>
          <div className={styles.back}>
            <h2 className={styles.title}>KYSEK</h2>
            <p className={styles.descrip}>
              An e-commerce site built on Shopify with a custom theme.
            </p>
            <Link href="/projects/kysek">
              <a className={styles.link}>Read More</a>
            </Link>
          </div>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <Image
              src="/the-healthy-cooking-blog-home-877.png"
              layout="responsive"
              width={877}
              height={642}
            />
          </div>
          <div className={styles.back}>
            <h2 className={styles.title}>The Healthy Cooking Blog</h2>
            <p className={styles.descrip}>
              A large blog featuring recipes and cooking tips. Built on
              WordPress.
            </p>
            <Link href="/projects/the-healthy-cooking-blog">
              <a className={styles.link}>Read More</a>
            </Link>
          </div>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <Image
              src="/ebrpha-home-2.png"
              layout="responsive"
              width={877}
              height={686}
            />
          </div>
          <div className={styles.back}>
            <h2 className={styles.title}>EBRPHA</h2>
            <p className={styles.descrip}>
              A WordPress site built on a custom theme for the East Baton Rouge
              Parish Housing Authority.
            </p>
            <Link href="/projects/ebrpha">
              <a className={styles.link}>Read More</a>
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
};
