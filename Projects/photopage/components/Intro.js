import Navbar from "./Navbar/Navbar"
import styles from "../styles/Home.module.css"

export default function Intro(){
    return(
        <section className={`${styles.IntroSection}`}>
        <div className={`${styles.Overlay}`}>
          <Navbar />
          <div className={`${styles.main}`}>
            <div className={`${styles.sideNav}`}>
              <span></span>
              <div className={`${styles.Icons}`}>
                <li className={`${styles.twitter}`}><a></a></li>
                <li className={`${styles.facebook}`} ><a></a></li>
                <li className={`${styles.instagram}`}><a></a></li>
                <li className={`${styles.linkedIn}`}><a></a></li>
              </div>
              <span></span>
            </div>
            <div className={`${styles.About}`}>
              <h1>Sagar Dinker Waydande</h1>
              <p>I am a Photographer, I Like to Photograph People<br/>
                I Like To Photograph Wild Animals and Forests<br/>
                I Do PreWedding Shoots and Wedding shoots too
              </p>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
      </section>
    )
}