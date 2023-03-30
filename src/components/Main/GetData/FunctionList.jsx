import React, { useEffect, useState } from "react"

import "../common.css";
import "./FunctionList.css";
import MakeList from './MakeList';


function FunctionList() {
  const [categoryObjects, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/3154333c55ee8660e734025b6c3a42cb/raw/051088a274b0fb78692f50e2ebcbbde7f37b31e9/functionsInCategory.json"
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
      <h1>카테고리별 사용 가능한 기능</h1>
      <p className="color-light-grey">
        기능 이름을 클릭하면 기능에 대한 설명, 기능을 제공하는 어플 목록, 기능을 사용하는 방법을 상세히 알려줍니다.
      </p>
      <div>
            {categoryObjects.length > 0 && (
              <MakeList ListObjects={categoryObjects}/>
            )}
          </div>
    </section>
  );
}

export default FunctionList;
