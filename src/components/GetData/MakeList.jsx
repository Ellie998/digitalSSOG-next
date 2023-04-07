import MakeListInCategory from './MakeListInCategory';
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
    {/* {
      ListObjects?.map(ListObject => (
        <li>
          <NavLink to={"?functionCategory=" + ListObject.category}>
            <button data-tooltip="클릭!">{ListObject.category}</button>
            </NavLink>
      </li>
      ))
      // <MakeListInCategory FunctionOrApp={FunctionOrApp} prop={ListObject.objects}/> 
    } */}


    {
      categorys.map(categoryName => {
        let categoryNameNoIcon = categoryName.slice(3, categoryName.length);
      return <li>
        <NavLink to={"?functionCategory="+categoryNameNoIcon}>
          <button 
          value={categoryNameNoIcon} 
          data-tooltip="클릭!" 
          onClick={toggleActive}               
          className={( {categoryNameNoIcon} == btnActive ? "clicked" : "")}>
            {categoryName}
            </button>
        </NavLink>
      </li>    
      })
    }   
  </ul>
    )
}

export default MakeList;