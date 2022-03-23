import styles from "../styles/Home.module.css";
import logo from "./logo512.png";
import Image from "next/image";

export default function Card(props: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a className={styles.card} href={props.href}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.description}</p>
      <Image alt="React logo" {...logo} />
    </a>
  );
}
