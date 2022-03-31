import data from "../data/data.json";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card({ item }) {


  return (
    <div className={styles.card}>
      <Image src={item.imgUrl} alt="some text" width={400} height={450} />
      <p>{item.name}</p>
     <Link href={`/code/${item.id}`} passHref={true}><button className={styles.button}>Adopt</button></Link> 
    </div>
  );
}
