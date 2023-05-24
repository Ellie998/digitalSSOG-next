import styles from './MakeList.module.css'
import { NavLink } from 'react-router-dom';



function MakeList({FunctionOrApp,ListObjects}){
  const categorys = ["🔔 new", "👑 hot", "📞 전화, 문자","👥 sns"];

  return (
    <ul className={styles.MakeList}>
    {
      categorys.map(categoryName => {
        let categoryRealName = categoryName.slice(3, categoryName.length);
        return (
        <li key={categoryRealName}>
          <NavLink to={`/${categoryRealName}`}>
            {
              ({isActive})=>
                <button 
                  value={categoryRealName} 
                  data-tooltip="클릭!" 
                  // className={isActive? "active":""}
                  style={{fontWeight: isActive? "bold":""}}
                  >
                    {categoryName}
                    </button>
            }
          </NavLink>
        </li>    
        )
      })
    }   
  </ul>
    )
}

export default MakeList;