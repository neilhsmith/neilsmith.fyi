import Link from "next/link";

import styles from "./Logo.module.css";

export const Logo = () => {
  return <Link href="/"><a className={styles.logo}>neilSmith</a></Link>
};