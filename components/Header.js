import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {

  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/pets">Pets</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
