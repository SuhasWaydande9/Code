import styles from "../styles/Home.module.css";

export default function Footer(){
  return(
    <div className={`${styles.Footer}`}>
      <div className={`${styles.Logo}`} style={{display:"flex", justifyContent:"space-around"}}>
        <div>S.M.G</div>
        <div>Profesional Photographer</div>
      </div>
      <div className={`${styles.sideNav}`}>
        <div className={`${styles.Icons}`} style={{flexDirection:"row", justifyContent:"space-around", width:"40%",maxWidth:"200px",minWidth:"80px", flexWrap:"wrap"}}>
          <li className={`${styles.twitter}`}><a></a></li>
          <li className={`${styles.facebook}`} ><a></a></li>
          <li className={`${styles.instagram}`}><a></a></li>
          <li className={`${styles.linkedIn}`}><a></a></li>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          target="_blank"
        >
          Copyright&#169;SuhasWaydande
        </a>
      </footer>
    </div>
  )
}