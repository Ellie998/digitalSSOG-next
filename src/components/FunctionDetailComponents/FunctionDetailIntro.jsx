import "./FunctionDetailIntro.module.css"
import { Link } from "react-router-dom";


function FunctionDetailIntro({name,charateristic,appNames}){
  return(
    
      <section id="main-header" className="layout-center">
        <h1>{name} 기능 소개</h1>
        <ul id="description-ul" className="grid-repeat-two">
          <li className="background-grey border-radius-round hover-box-shadow">
            <h2> 기능 특징</h2>
            <p>{charateristic}</p>
          </li>
          <li className="background-grey border-radius-round hover-box-shadow">
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