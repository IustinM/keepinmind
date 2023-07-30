import React, { useContext, useEffect } from 'react'
import MenuContainer from '../components/PlusMenu/MenuContainer'
import Navigation from '../components/Navigation/Navigation'
import { PageContext } from '../context/PageContainer'
import AddModal from '../components/Add/utils/AddModal'
import {DayContext} from '../context/DayContext'
import DataElements from '../components/Add/DataElements'


const DayPage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {daysValues,setDaysValues,feelingsValue,setFeelingsValue} = useContext(DayContext);

  useEffect(()=>{
    setCurrentNavItem('days')
  },[])

  return (
    <div className="flex">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        {hideAddModal ? 
        <AddModal title='day' elementsValue={daysValues} setElementsValue={setDaysValues} />
        :
        <DataElements title={'Days'} elementsValue={daysValues} setElementsValue={setDaysValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
  </div>
  )
}

export default DayPage