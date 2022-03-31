import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../data/data.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>This is the home page</h2>
        
      </main>
    </div>
  );
}