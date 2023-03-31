import styles from "./FunctionDetailIntro.module.css"
import { Link } from "react-router-dom";


function FunctionDetailIntro({name,charateristic,appNames}){
  return(
    
      <section className={styles.FunctionDetailIntro} >
        <h1>📞 {name} 기능 소개</h1>
        <ul>
          <li className={styles.listStyling}>
            <h2> 기능 특징</h2>
            <p>{charateristic}</p>
          </li>
          <li className={styles.listStyling}>
            <h2>기능을 제공하는 어플</h2>
            <ul>
              {
                appNames?.map((appName)=>(
                  <li key={appName}><Link to={'/app/'+ appName}>{appName}</Link></li>
                ))
              }
            </ul>
          </li>
        </ul>
      </section>    
  )
}

export default FunctionDetailIntro;