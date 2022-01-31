import { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Section.module.css";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
}

export const Section = ({ children, ...otherProps }: SectionProps) =>
  <section className={styles.section} {...otherProps}>
    {children}
  </section>;