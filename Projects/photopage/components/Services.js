import styles from "../styles/Home.module.css";
import Image from "next/image"

export default function Services(){
    return(
        <div className={`${styles.Services}`}>
            <h2>What Can I Do For You</h2>
            <div className={`${styles.ServiceContainer}`}>
                <div className={`${styles.ServiceCard}`}>
                    <Image 
                    src="/icons/icons8-camera-100.png"
                    width={50}
                    height={50}
                    />
                    <h3>Photo shooting</h3>
                    <p>Hight-quality and vibrant photos foreach of you</p>
                </div>
                <div className={`${styles.ServiceCard}`}>
                    <Image 
                    src="/icons/icons8-video-camera-100.png"
                    width={50}
                    height={50}
                    />
                    <h3>Video shooting</h3>
                    <p>Capture your moments so they always remain with you</p>
                </div>
                <div className={`${styles.ServiceCard}`}>
                    <Image 
                    src="/icons/icons8-image-100.png"
                    width={50}
                    height={50}
                    />
                    <h3>Retouch</h3>
                    <p>Your photos will be the most beautiful</p>
                </div>
                <div className={`${styles.ServiceCard}`}>
                    <Image 
                    src="/icons/icons8-micro-100.png"
                    width={50}
                    height={50}
                    />
                    <h3>Sound recording</h3>
                    <p>Only high-quality recording of your sound and its processing</p>
                </div>
            </div>
      </div>
    )
}