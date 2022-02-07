import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Container } from "components/Container";
import { Logo } from "components/Logo";
import { DrawerButton } from "./DrawerButton";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <DrawerButton />
        <div className={styles.content}>
          <nav className={styles.mainNav}>
            <ul className={styles.mainList}>
              <li>
                <Link href="/">
                  <a className={styles.title}>neilSmith</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/#skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="/#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.socialNav}>
            <ul className={styles.socialList}>
              <li>
                <Link href="https://github.com/neilhsmith">
                  <a>
                    <FontAwesomeIcon icon={faGithub} size="sm" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/neil-smith-a7a46766/">
                  <a>
                    <FontAwesomeIcon icon={faLinkedin} size="sm" />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

// export const Navbar = () => {
//   return <div className={styles.navbarWrapper}>
//     <Container>
//       <nav className={styles.navbar}>
//         <div className={styles.logoWrapper}>
//           <Logo />
//         </div>
//         <div className={styles.drawer}>
//           <div className={styles.linksWrapper}>
//             links
//           </div>
//           <div className={styles.socialsWrapper}>
//             socials
//           </div>
//         </div>
//         <div className={styles.btnWrapper}>
//           btn
//         </div>
//       </nav>
//     </Container>
//   </div>
// }

// export const Navbar = () => {
//   return <div className={styles.navbarBg}>
//     <Container>
//       <div className={styles.navbar}>
//         <div className={styles.titleContainer}>
//           <Link href="/"><a className={styles.title}>neilSmith</a></Link>
//         </div>
//         <div className={styles.dynamicsContainer}>
//           dynamics
//         </div>
//         <div className={styles.toggleBtnContainer}>
//           <input type="checkbox" className={styles.drawerToggle} id="navi-toggle" />
//           <label htmlFor="navi-toggle" className={styles.toggleBtn}>
//             <span className={styles.btnIcon}>&nbsp;</span>
//           </label>
//         </div>
//       </div>
//     </Container>
//   </div>;
// }

// export const Navbar = () => {
//   const navbarRef = useRef<HTMLElement>(null);
//   const [shouldShadow, setShouldShadow] = useState(false);

//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       const yPos = navbarRef.current?.getBoundingClientRect().y;
//       setShouldShadow(yPos === 0);
//     };

//     // trigger this so that the initial state is updated as soon as we're mounted
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return <nav className={classnames(styles.navbar, { [styles.shadow]: shouldShadow })} ref={navbarRef} >
//     <Link href="/">
//       <a className={styles.title}>neilSmith</a>
//     </Link>
//     <div className={styles.list}>
//       <Link href="/"><a>About</a></Link>
//       <Link href="/"><a>Skills</a></Link>
//       <Link href="/"><a>Projects</a></Link>
//       <Link href="/"><a>Contact</a></Link>
//     </div>
//     <div>socials</div>
//     <button><FontAwesomeIcon icon={faBars} /></button>
//   </nav >
// };
