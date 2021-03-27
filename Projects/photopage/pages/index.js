import Head from "next/head";
import styles from "../styles/Home.module.css";

import IntroSection from "../components/Intro";
import Services from "../components/Services";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/AboutMe";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Contact />
      <Footer />
    </div>
  );
}
