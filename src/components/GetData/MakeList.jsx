import styles from './MakeList.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from "react";


function MakeList({FunctionOrApp,ListObjects}){
  const categorys = ["🔔 new", "👑 hot", "📞 전화, 문자","👥 sns"];
  let [btnActive, setBtnActive] = useState("");
  
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <ul className={styles.MakeList}>
    {
      categorys.map(categoryName => {
        let categoryRealName = categoryName.slice(3, categoryName.length);
        return (
        <li key={Math.random()}>
          <NavLink to={"?" + FunctionOrApp + "Category=" + categoryRealName}>
          <button 
            value={categoryRealName} 
            data-tooltip="클릭!" 
            onClick={toggleActive}               
            className={( {categoryRealName} === btnActive ? "clicked" : "")}
            >
            {categoryName}
          </button>
          </NavLink>
        </li>    
        )
      })
    }   
  </ul>
    )
}

export default MakeList;