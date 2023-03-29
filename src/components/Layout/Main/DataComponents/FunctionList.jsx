import React, {  useState } from "react"
import { Link } from 'react-router-dom';

import "../common.css";
import "./FunctionList.css";


function FunctionList() {
  const [categoryObjects, setData] = useState([]);
  
  fetch("https://gist.githubusercontent.com/Ellie998/c66f50f38d126fee717264012ad82c4e/raw/191fd26bb0f3ec9a98d41daa8ce227895ebe80d8/functionsInCategory.json"
  ).then(response => {
    return response.json()
  }).then(data => {
    setData(data);
  })

  return (
    <section id="main-main" className="layout-center">
      <h1>카테고리별 사용 가능한 기능</h1>
      <p className="color-light-grey">
        궁금한 기능을 클릭하면 연관 어플 리스트를 알려줍니다.
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
                          categoryObject.functions.map(functionInCategory=> (
                            <li className='animate-scale-up'>
                              <Link to={"/function/"+functionInCategory}>{functionInCategory}</Link>
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

export default FunctionList;
