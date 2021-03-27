import styles from "../styles/Home.module.css"

export default function Contact(){
  return(
    <div className={`${styles.Contact}`}>
      <div style={{display:"flex",alignItems:"center"}}>
        <h3 style={{flex:"1", textAlign:"center"}}>Send me a messege</h3>
        <div style={{
            flex:"2",
            border:"2px solid #ff9e0d"
                    }}></div>
      </div>
      <div className={`${styles.SendMessage}`}>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Your message" type="text" style={{height:"150px"}}></input>
        <button type="submit">Send message</button>
      </div>
    </div>
  )
}