import data from "../data/data.json";
import Card from "../components/Card";
import styles from "../styles/Card.module.css";


export default function Pets() {
  return (
    <div className={styles.cardContainer}>
     
      {data.map((item) => (
         <Card key={item.id} item={item} />
       
      ))}
    
    </div>
  );
}
