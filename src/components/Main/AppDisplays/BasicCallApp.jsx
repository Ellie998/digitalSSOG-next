import styles from "./BasicCallApp.module.css"
import '../common.css'
import './display.css'

import AppHeader from './sections/AppHeader'
import AppMain from './sections/AppMain'
import AppNav from './sections/AppNav'

function BasicCallApp(){
  return (
    <div className={styles.BasicCallApp}>
      <AppHeader />
      <AppMain />
      <AppNav/>
    </div>

  )
}

export default BasicCallApp;