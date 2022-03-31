import { useRouter } from "next/router";
import data from "../../data/data.json";
import styles from "../../styles/Card.module.css";
import Image from "next/image";





export default function PetsPage() {
  const router = useRouter();
//   console.log("Router is", router);
  const getData = data.find((item) => item.id == router.query.id);
//   console.log("get Data !!!!", getData);

  return (
    <div className={styles.box}>
      {
        <div className={styles.card}>
          <Image
            src={getData?.imgUrl}
            width={400}
            height={450}
            alt={getData?.name}
          />

          <p>{getData?.name}</p>
          <p>{getData?.neighbourhood}</p>
        </div>
      }

        <button className={styles.back} onClick={() => router.back()}>Back</button>

    </div>
  );
}
