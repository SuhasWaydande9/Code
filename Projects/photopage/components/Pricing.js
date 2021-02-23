import styles from "../styles/Home.module.css";

export default function Pricing(){
    return(
        <div className={`${styles.Pricing}`}>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{
                    flex:"2",
                    border:"2px solid #ff9e0d"
                            }}></div>
                <h3 style={{flex:"1", textAlign:"center"}}>Pricing</h3>
            </div>
            <div className={`${styles.Prices}`}>
                <div className={`${styles.PriceBox}`}>
                    <h2>MINIMUM</h2>
                    <h2><span>$200</span></h2>
                    <p>Perfect for small sessions and personal photo shoots with and many purpos</p>
                    <div className={`${styles.checkboxes}`}>
                        <div>
                            <input type="checkbox" checked={true}>
                            </input>
                            <p>2-hours shoot</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>50 photo available</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>3 revisions</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>Free retouch</p>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className={`${styles.PriceBox}`}>
                    <h2>STANDARD</h2>
                    <h2><span>$500</span></h2>
                    <p>Perfect for budget sessions and personal photo shoots with and many purpos</p>
                    <div className={`${styles.checkboxes}`}>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>4-hours shoot</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>100 photos available</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>5 revisions</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>free retouch</p>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className={`${styles.PriceBox}`}>
                    <h2>PREMIUM</h2>
                    <h2><span>$900</span></h2>
                    <p>perfect for big events like Wedding and engagments and othe type of celebrations</p>
                    <div className={`${styles.checkboxes}`}>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>6+ hours shoot</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>150 photos available</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>8 revisions</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={true}></input>
                            <p>Free retouch</p>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}