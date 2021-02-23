import styles from "../styles/Home.module.css"
import Image from "next/image";

export default function MyWorks(){
    let GoTo = 1;
    function nextGoTo(){
        if(GoTo < 6){
            GoTo += 1;
            GoThere();
        }else{
            GoTo = 1;
            GoThere();
        }
    };
    function prevGoTo(){
        if(GoTo > 1){
            GoTo -= 1;
            GoThere();
        }else{
            GoTo = 6
            GoThere();
        }
    }
    function GoThere(){
        window.location.href=`#img-${GoTo}`
    }
    return(
        <div className={`${styles.MyWorks}`}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"20px 0px"
                
                }}>
                <div style={{
                    flex:2,
                    border:"2px solid #ff9e0d",
                    height:"0px"

                    }}></div>
                <h3 style={{
                    flex:1,
                    textAlign:"center"

                    }}>My Latest Works</h3>
            </div>
            <div className={`${styles.Slider}`}>
                <div id="img-1" className={`${styles.images}`} >
                    <Image src="/images/wallhaven-gjdz5e.jpg" layout="fixed" width={500} height={700}/>
                </div>
                <div id="img-2" className={`${styles.images}`}>
                    <Image src="/images/wallhaven-j85dq5.jpg" layout="fixed" width={500} height={700}/>
                </div>
                <div id="img-3" className={`${styles.images}`}>
                    <Image src="/images/wallhaven-mdyqlk.jpg" layout="fixed" width={500} height={700}/>
                </div>
                <div id="img-4" className={`${styles.images}`}>
                    <Image src="/images/wallhaven-wy2wvr.jpg" layout="fixed" width={500} height={700}/>
                </div>
                <div id="img-5" className={`${styles.images}`}>
                    <Image src="/images/wallhaven-4x916v.jpg" layout="fixed" width={500} height={700}/>
                </div>
                <div id="img-6" className={`${styles.images}`}>
                    <Image src="/images/wallhaven-yjr2rl.jpg" layout="fixed" width={500} height={700}/>
                </div>
            </div>
            <button className={`${styles.LeftButton}`} onClick={prevGoTo}></button>
            <button className={`${styles.RightButton}`} onClick={nextGoTo}></button>
        </div>
    )
}