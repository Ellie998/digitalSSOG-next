import React, {  useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import MakeList from './MakeList'
import styles from "./FunctionList.module.css";


function AppList() {
  const [categoryObjects, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/fb9181eaa8774d5b7b9fb30101158b1d/raw/c3118f1063e44ba567aecaf7a1051853909e3013/appData.json"
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
      <h1>카테고리별 앱 리스트</h1>
      <p>
        궁금한 어플을 클릭하면 어플에 존재하는 기능들에 대해 알려줍니다.
      </p>
      <div>
            {categoryObjects.length > 0 && (
              <MakeList FunctionOrApp={'app'} ListObjects={categoryObjects}/>
            )}
          </div>
    </section>
  );
}

export default AppList;
