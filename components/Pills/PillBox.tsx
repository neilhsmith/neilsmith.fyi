import styles from "./Pills.module.css";

interface PillProps {
  id: number | string;
  name: string;
};

interface PillBoxProps {
  items: PillProps[];
};

export const Pill = ({ name }: PillProps) => {
  return <div className={styles.pill}>{name}</div>
};

export const PillBox = ({ items }: PillBoxProps) => {
  return <ul className={styles.pillBox}>
    {items.map(item => <Pill key={item.id} id={item.id} name={item.name} />)}
  </ul>
};