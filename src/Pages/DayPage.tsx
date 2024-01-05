import React, { useContext, useEffect, useState } from 'react'
import MenuContainer from '../components/PlusMenu/MenuContainer'
import Navigation from '../components/Navigation/Navigation'
import { PageContext } from '../context/PageContainer'
import AddModal from '../components/Add/utils/AddModal'
import {DayContext} from '../context/DayContext'
import DataElements from '../components/Add/DataElements'
import { regenerateTokenAsync } from '../components/Add/utils/functions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingCircle from '../components/utils/LoadingCircle'


const DayPage:React.FC = () => {

  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string>('');
  const navigate = useNavigate();  
  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {daysValues,setDaysValues,feelingsValue,setFeelingsValue} = useContext(DayContext);
  const {isAdmin,email} = useContext(UserContext);

  const getDaysValue = async(retry=true) =>{

    setIsLoading(true);
    try{
      const daysValueAsync = await axios.post(`${process.env.REACT_APP_API_URL}/days/get-days`,{admin:isAdmin,email:email},{
        withCredentials:true
      });
      setErrorMessage('');
      setIsLoading(false)
      setDaysValues(daysValueAsync.data)
    }catch(err:any){
      setErrorMessage('Something went wrong');
      setIsLoading(false)
      if(!isAdmin){
        regenerateTokenAsync(err,getDaysValue,retry,navigate);
      }
    }
  }
  

  useEffect(()=>{
    getDaysValue();
    setCurrentNavItem('days')
  },[]);
  useEffect(() => {
    if(daysValues.length > 0){
      setIsLoading(false)
    }
  },[daysValues])

  
  useEffect(()=>{
    getDaysValue();
    setCurrentNavItem('days')

  },[email])

  return (
    <div className="flex lg:flex-col">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    {isLoading ? <div className='w-full min-h-[100vh] flex justify-center items-center'><LoadingCircle borderColor borderWidth={8} width={100} height={100}/></div>
          : errorMessage.length > 0 ?
          <div className='text-default-red text-[1.5rem] flex items-center p-[2rem] lg:text-[1.2rem]'>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <p className='ml-[1rem]'>{errorMessage}</p> 
          </div>
          :
    <div className=' w-full'>
        <MenuContainer/>
        {hideAddModal ? 
        <AddModal title='day' elementsValue={daysValues} setElementsValue={setDaysValues} />
        :
        <DataElements title={'Days'}  type={'days'} elementsValue={daysValues} setElementsValue={setDaysValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
    }
  </div>
  )
}

export default DayPage