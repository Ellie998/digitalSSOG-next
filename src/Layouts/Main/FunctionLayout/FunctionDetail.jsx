
import "../main.css";
import "./FunctionDetail.css"
import FunctionDetailIntro from '../../../components/FunctionDetailComponents/FunctionDetailIntro'
import FunctionDetailMain from '../../../components/FunctionDetailComponents/FunctionDetailMain'


import { useEffect, useState } from "react"


function FunctionDetail(){
  const url = decodeURI(window.location.pathname);
  const urlID = url.substring(10, url.length);
  

  const [detailFunctionObject, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/Ellie998/3154333c55ee8660e734025b6c3a42cb/raw/051088a274b0fb78692f50e2ebcbbde7f37b31e9/functionsInCategory.json"
    ).then(response => {
      return response.json()
    }).then(data => {
      data.map(categoryObject => (
        categoryObject.functions.map(functionObject => {
          if(functionObject.name == urlID){
            setData(functionObject)
          }
        })
      ))

    })
  }
  useEffect(() => {
        fetchData()
      }, [])


    

  return(
    <main>
      <FunctionDetailIntro 
        name={detailFunctionObject.name}
        charateristic={detailFunctionObject.charateristic} 
        appNames={detailFunctionObject.app}
      />
      <FunctionDetailMain         
        name={detailFunctionObject.name}
        functionMethods={detailFunctionObject.method}/>
      </main>
  )
}

export default FunctionDetail;