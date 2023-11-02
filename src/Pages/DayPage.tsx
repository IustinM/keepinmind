import React, { useContext, useEffect } from 'react'
import MenuContainer from '../components/PlusMenu/MenuContainer'
import Navigation from '../components/Navigation/Navigation'
import { PageContext } from '../context/PageContainer'
import AddModal from '../components/Add/utils/AddModal'
import {DayContext} from '../context/DayContext'
import DataElements from '../components/Add/DataElements'
import { regenerateTokenAsync } from '../components/Add/utils/functions'
import axios from 'axios'


const DayPage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {daysValues,setDaysValues,feelingsValue,setFeelingsValue} = useContext(DayContext);

  const getDaysValue = async(retry=true) =>{

    try{
      const daysValueAsync = await axios.get(`${process.env.REACT_APP_API_URL}/days`,{
        withCredentials:true
      })
      setDaysValues(daysValueAsync.data)
    }catch(err:any){
      regenerateTokenAsync(err,getDaysValue,retry);
    }
  }
  

  useEffect(()=>{
    getDaysValue();
    setCurrentNavItem('days')
  },[])

  return (
    <div className="flex lg:flex-col">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        {hideAddModal ? 
        <AddModal title='day' elementsValue={daysValues} setElementsValue={setDaysValues} />
        :
        <DataElements title={'Days'}  type={'days'} elementsValue={daysValues} setElementsValue={setDaysValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
  </div>
  )
}

export default DayPage