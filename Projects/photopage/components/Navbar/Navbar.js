import React from "react"
import styles from "../../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <div className={`${styles.Navbar}`}>
            <div className={`${styles.Logo}`}>
                <div>S.M.G</div>
                <div>Profesional Photographer</div>
            </div>
            <div className={`${styles.Menu}`}>
                <p>+91-9766908348</p>
                <span>India</span>
                <div>
                    Menu
                </div>
            </div>
        </div>
    )
}