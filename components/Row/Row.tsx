import { ReactNode } from "react";

import styles from "./Row.module.css";

export type RowProps = {
  children: ReactNode
};

export type ColProps = {
  children: ReactNode
};

export const Row = ({ children }: RowProps) => <div className={styles.row}>{children}</div>;

export const Col = ({ children }: ColProps) => <div className={styles.column}>{children}</div>;