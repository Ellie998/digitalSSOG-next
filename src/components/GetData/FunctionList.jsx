import React, { useEffect, useState } from "react"

import styles from "./FunctionList.module.css";
import MakeList from './MakeList';


function FunctionList() {
  const [categoryObjects, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/7aac2dd4a7aab78765a41f37d7ecff2a/raw/e064c5715c6e010f7abbc439adeb80d140bd5ac3/functionsInCategory.json"
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
    <section className={styles.FunctionList}>
      <h1>카테고리별 사용 가능한 기능</h1>
      <p >
        기능 이름을 클릭하면 기능에 대한 설명, 기능을 제공하는 어플 목록, 기능을 사용하는 방법을 상세히 알려줍니다.
      </p>
      <div>
            {categoryObjects.length > 0 && (
              <MakeList FunctionOrApp={'function'} ListObjects={categoryObjects}/>
            )}
          </div>
    </section>
  );
}

export default FunctionList;
