import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Product from "../components/Product"

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.primeColor}`}>
      <Head>
        <title>Infinity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`${styles.navbar} ${styles.primeColor} ${styles.primeText}`} >
        <ui className={`${styles.Display_Flex}`}>
          <li>Shop</li>
          <li>Store & Delivery</li>
        </ui>
        <h2>Infinity</h2>
        <div >
          <ui className={`${styles.Display_Flex}`}>
            <li>More</li>
            <li>Contact</li>
            <li id="fb"></li>
            <li id="insta"></li>
          </ui>
        </div>
      </nav>
      <main className={`${styles.main} ${styles.primeText}`}>
        <div className={`${styles.Intro} ${styles.primeText}`}>
          <h1 id="Intro" className={styles}>INFINITY <span className={`${styles.textOff}`}> STORM</span> SMARTWATCH</h1>
        </div>
        <div>
          <div className={`${styles.Product} ${styles.Display_Flex}`}>
            <div className={`${styles.Circle} ${styles.circle1}`}></div>
            <div className={`${styles.Circle} ${styles.circle2}`}></div>
            <div className={`${styles.ProductContainer} ${styles.Display_Flex}`}>
              <Product/>
            </div>
          </div>
        </div>
      </main>
      

      <footer className={styles.footer}>
        Copyright&#169;SuhasWaydande
      </footer>
    </div>
  )
}
