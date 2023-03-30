import styles from "./BasicCallApp.module.css"
import './display.css'

import AppHeader from './sections/AppHeader'
import AppMain from './sections/AppMain'
import AppNav from './sections/AppNav'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'



function BasicCallApp(){

  // console.log(functionName)
  // console.log(currentURL[1])

  return (
    <div className={styles.BasicCallApp}>
      <AppHeader />
      <AppMain/>
      <AppNav/>
    </div>

  )
}

export default BasicCallApp;