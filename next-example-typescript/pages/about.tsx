import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You can always go{" "}
          <Link href="/">
            <a>home</a>
          </Link>
        </h1>

        <p className={styles.description}>
          The about page.
          <code className={styles.code}>pages/about.tsx</code>
          What is this magic routing!?
        </p>

        <div className={styles.grid}>
          <Card title="First" description="The number one card" href="_blank" />
          <Card
            title="Second"
            description="The number one card"
            href="_blank"
          />
          <Card title="Third" description="The number two card" href="_blank" />
          <Card
            title="First"
            description="The number three card"
            href="_blank"
          />
          <Card
            title="Second"
            description="The number one card"
            href="_blank"
          />
          <Card title="Third" description="The number one card" href="_blank" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;