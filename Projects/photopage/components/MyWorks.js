import styles from "../styles/Home.module.css"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from "./Carousel";

export default function MyWorks(){
    return(
        <div className={`${styles.MyWorks}`}>
            <Carousel />

        </div>
    )
}