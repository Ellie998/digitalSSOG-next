import "./common.css";
import "./main.css";
import "./AppDetail.css"

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';



function AppDetail(){
  
  const url = decodeURI(window.location.pathname);
  const urlID = url.substring(5, url.length);
  
  const [detailAppObject, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/dda7916f641c9adee4fc45e16540ad06/raw/b27c5847936f806ee1af050eb517fb799b8af41d/appData.json"
    ).then(response => {
      return response.json()
    }).then(data => {
      data.map(categoryObject => (
        categoryObject.apps.map(appObject => {
          if(appObject.name == urlID){
            setData(appObject)
            return
          }
        })
      ))

    })
  }
  useEffect(() => {
        fetchData()
      }, [])

  return(
    <main>
      <section id="main-header" class="layout-center">
        <h1>{detailAppObject.name} 어플 소개</h1>
        <div id="people-response-wrap">
          <p id="description-downNum"></p>
          <p id="description-star"></p>
        </div>
        <ul id="description-ul">
          <li>
            <h2>어플 특징</h2>
            <p id="description-characteristic">{detailAppObject.특징}</p>
          </li>
          <li>
            <img
              id="description-img"
              src=""
              alt=""
              style=
            {{    width: '170px',
                height: '170px',
                borderRadius: '22%',
                overflow: 'hidden',
                display: 'inline-block',
                verticalAlign: 'middle',}}
              
            />
          </li>
        </ul>
      </section>

      <section id="main-main" className="layout-center">
        <div id="main-main-wrap" className="wrap grid-repeat-two">
          <h2>{detailAppObject.name} 어플 사용 기능 정리</h2>
          <ul id="app-categorys" className="text-align-left"></ul>
          {
                detailAppObject.core?.map((functionName)=>(
                  <li key={functionName}><Link to={'/function/'+ functionName}>{functionName}</Link></li>
                ))
              }
          <div id="display-box2">
          </div>
          <button className="btn">직접 체험하러 GO!</button>
        </div>
      </section>

      <section id="main-bottom" className="layout-center">
        <div id="main-bottom-wrap" className="wrap grid-repeat-two">
          <h2>어플 설정 방법</h2>
          <p className="color-light-grey">
            해당 어플의 설정 방법에 대한 내용입니다.
          </p>

          <ul id="function-extra" className="text-align-left"></ul>

          <div
            id="display-box3"
            className="background-white border-radius-round hover-box-shadow"
          ></div>
          <button className="btn">직접 체험하러 GO!</button>
        </div>
      </section>
    </main>
  )
}

export default AppDetail;