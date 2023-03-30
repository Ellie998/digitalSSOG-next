import React, {  useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import "./FunctionList.css";


function AppList() {
  const [categoryObjects, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/dda7916f641c9adee4fc45e16540ad06/raw/b27c5847936f806ee1af050eb517fb799b8af41d/appData.json"
    ).then(response => {
      return response.json()
    }).then(data => {
      setData(data);
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section id="main-main" className="layout-center">
      <h1>카테고리별 앱 리스트</h1>
      <p className="color-light-grey">
        궁금한 어플을 클릭하면 어플에 존재하는 기능들에 대해 알려줍니다.
      </p>
      <div>
            {categoryObjects.length > 0 && (
              <ul id="app-categorys" className="grid-repeat-two">
                {
                  categoryObjects.map(categoryObject => (
                    <li className='border-radius-round hover-box-shadow'>
                    <details>
                      <summary>{categoryObject.category}</summary>
                      <h3 className='none'>{categoryObject.category}</h3>
                      <ol>
                        {
                          categoryObject.apps.map(appObject=> (
                            <li className='animate-scale-up'>
                              <Link to={"/app/"+appObject.name}>{appObject.name}</Link>
                            </li>
                          ))
                        }
                        
                      </ol>
                    </details>
                  </li>
                  ))
                }
              </ul>
            )}
          </div>
    </section>
  );
}

export default AppList;
