import React, { useEffect } from "react";
import styles from "../styles/Product.module.css";

export default function Product(props){
    return(
        <div className={`${styles.ProductContainer}`}>
            <div className={`${styles.ButtonLeft}`}>
            </div>
            <div className={`${styles.productLayout}`}>
                <div id="TheImage">

                </div>
                <div id="ProductInfo">

                </div>
            </div>
            <div className={`${styles.ButtonRight}`}>

            </div>
        </div>
        
    )
}