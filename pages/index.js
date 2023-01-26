import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Test from "../components/Test";

const inter = Inter({ subsets: ["latin"] });

async function getTemprature() {
  var response = await fetch("/getTemprature", { method: "POST" }).json();
  console.log(response.temperature);
}

export default async function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Scan documents</h1>
        </div>
        <div className={styles.center}>
          <Test temperature={123} />
        </div>

        <button onClick={await getTemprature()}></button>
      </main>
    </>
  );
}
