import styles from "./Splash.module.css";

export const Splash = () => {
  return <header className={styles.splash} role="banner" style={{ backgroundImage: "url(/rubix-cube-1920.png)" }}>
    <div className={styles.splashInner}>
      <h1 className={styles.title}>Hello, I'm <span className={styles.highlight}>Neil Smith</span></h1>
      <h2 className={styles.subtitle}>A full-stack developer.</h2>
    </div>
  </header>
};