
import "./FunctionDetailMain.module.css"

import { NavLink , Outlet} from "react-router-dom";
import DisplayBox from "./DisplayBox"



function FunctionDetailMain({name, functionMethods}){
  let num = 0;
  return(
    <section id="main-main" className="layout-center background-grey">
        <div id="main-main-wrap" className="wrap grid-repeat-two">
          <h2>기능 사용 방법 정리</h2>
          <ol id="description-app" className="text-align-left">
            <p className="color-grey">화면을 보고싶은 목차를 click!</p>
            {
              functionMethods?.map((functionMethodObject) => (
                <li key={Math.random()}>
                  <details>
                    <summary>{functionMethodObject.methodAppName}</summary>
                    <ol className='methodNumOl margin-left'>
                      {
                        functionMethodObject.howto?.map((functionMethod)=>(
                          <li key={Math.random()}>
                            <p>방법 {functionMethod.methodNum}</p>
                            <ol className='margin-left'>
                              {
                                functionMethod.methodContent?.map((methodDescription)=>(
                                  <li key={methodDescription} className='list-hover description-list' >
                                    <NavLink to={'/function/'+ name +'/' + num++}>{methodDescription}</NavLink>
                                  </li>
                                ))
                              }
                            </ol>
                          </li>
                        ))
                      }
                    </ol>
                  </details>
                </li>
              ))
            }
          </ol>
          <Outlet />
          {/* <DisplayBox/> */}
        </div>
      </section>    
  )
}

export default FunctionDetailMain;