import React, {  useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import { appDataURL } from '../../data';
import MakeList from './MakeList'
import MakeAppList from './MakeAppList'
import styles from "./FunctionList.module.css";


function AppList() {
  const [categoryObjects, setData] = useState([]);
  
  const fetchData = () => {
    fetch(appDataURL).then(response => {
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
          <MakeList 
          FunctionOrApp={'app'} ListObjects={categoryObjects}></MakeList>
          )}
        {categoryObjects.length > 0 && (

          <MakeAppList FunctionOrApp={'app'} listObjects={categoryObjects}></MakeAppList>
          )}    
          
      </div> 
    </section>
  );
}

export default AppList;
