import Head from "next/head";
import styles from "../styles/Home.module.css";

import IntroSection from "../components/Intro";
import Services from "../components/Services";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/AboutMe";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PhotoGrapher PortFolio</title>
      </Head>
      <IntroSection />
      <Services />
      <MyWorks />
      <AboutMe />
      <Pricing />

      <footer className={styles.footer}>
        <a
          target="_blank"
        >
          Copyright&#169;SuhasWaydande
        </a>
      </footer>
    </div>
  );
}
