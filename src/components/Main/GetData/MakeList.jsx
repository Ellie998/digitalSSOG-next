import MakeListInCategory from './MakeListInCategory';

function MakeList({ListObjects}){
  return (
    <ul id="function-categorys" className="grid-repeat-two">
    {
      ListObjects?.map(ListObject => (
        <li className='border-radius-round hover-box-shadow'>
        <details>
          <summary>{ListObject.category}</summary>
          <h3 className='none'>{ListObject.category}</h3>
          <MakeListInCategory  prop={ListObject.functions}/>
        </details>
      </li>
      ))
    }
  </ul>
    )
}

export default MakeList;