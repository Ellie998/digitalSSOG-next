import "../common.css";
import "../main.css";
import "../FunctionDetail.css"
import styles from "./FunctionDetailMain.module.css"


import DisplayBox from './DisplayBox'

function onMethodClick(event){
  const listElements = event.target.parentElement.children;
  for (const listElement of listElements){
    listElement.classList.remove(styles.targetList);
  }
  event.target.classList.add(styles.targetList);

}

function FunctionDetailMain({functionMethods}){
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
                                  <li key={methodDescription} className='list-hover description-list' onClick={onMethodClick}>
                                    {methodDescription}
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
          <DisplayBox></DisplayBox>

        </div>
      </section>    
  )
}

export default FunctionDetailMain;