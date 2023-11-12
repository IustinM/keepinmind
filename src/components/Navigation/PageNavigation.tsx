import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageNavigation = () => {
  return (
    <div>
        <div className="flex  items-center text-[1.8rem] ">
        <FontAwesomeIcon className='mr-2 text-default-red ' icon={faBrain}/>
        <h2>KeepInMind</h2>
      </div>
    </div>
  )
}

export default PageNavigation