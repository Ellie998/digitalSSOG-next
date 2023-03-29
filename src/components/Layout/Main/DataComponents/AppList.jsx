import React, {  useState } from "react"
import { Link } from 'react-router-dom';

import "../common.css";
import "./FunctionList.css";


function AppList() {
  const [categoryObjects, setData] = useState([]);
  
  fetch("https://gist.githubusercontent.com/Ellie998/7df07bd7374204fe9b614c16f00e5442/raw/4c3fa24f97b9e2639e4ee9e8ae0a8ab2729629de/appData.json"
  ).then(response => {
    return response.json()
  }).then(data => {
    setData(data);
  })

  return (
    <section id="main-main" className="layout-center">
      <h1>카테고리별 사용 가능한 기능</h1>
      <p className="color-light-grey">
        궁금한 어플을 클릭하면 어플 속 기능 리스트를 알려줍니다.
      </p>
      <div>
            {categoryObjects.length > 0 && (
              <ul id="function-categorys" className="grid-repeat-two">
                {
                  categoryObjects.map(categoryObject => (
                    <li className='border-radius-round hover-box-shadow'>
                    <details>
                      <summary>{categoryObject.category}</summary>
                      <h3 className='none'>{categoryObject.category}</h3>
                      <ol>
                        {
                          categoryObject.apps.map(functionInCategory=> (
                            <li className='animate-scale-up'>
                              <Link to={"/app/"+functionInCategory}>{functionInCategory}</Link>
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
