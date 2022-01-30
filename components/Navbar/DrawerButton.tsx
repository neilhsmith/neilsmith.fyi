import styles from "./Navbar.module.css";

export const DrawerButton = () => {
  return <>
    <input id={styles.toggle} className={styles.checkbox} type="checkbox" />
    <label className={styles.btn} htmlFor={styles.toggle}>
      <span className={styles.icon}></span>
    </label>
    <div id={styles.background}></div>
  </>
};