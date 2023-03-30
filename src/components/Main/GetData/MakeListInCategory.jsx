import { Link } from 'react-router-dom';


function MakeListInCategory({prop}){
  return (
    <ol>
      {
        prop?.map(functionObject=> (
          <li className='animate-scale-up'>
            <Link to={"/function/"+functionObject.name}>{functionObject.name}</Link>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeListInCategory;