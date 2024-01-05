import React, { useContext, useEffect, useState } from 'react';
import MenuContainer from '../components/PlusMenu/MenuContainer';
import Navigation from '../components/Navigation/Navigation';
import { PageContext } from '../context/PageContainer';
import AddModal from '../components/Add/utils/AddModal';
import {MovieContext} from '../context/MovieContext';
import DataElements from '../components/Add/DataElements';
import axios from 'axios';
import { regenerateTokenAsync } from '../components/Add/utils/functions';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingCircle from '../components/utils/LoadingCircle';

const MoviePage:React.FC = () => {

  const navigate = useNavigate();  
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string>('');
  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {moviesValues,setMoviesValues,feelingsValue,setFeelingsValue} = useContext(MovieContext);
  const {isAdmin,email} = useContext(UserContext)
  const getMoviesValue = async(retry=true) =>{

    setIsLoading(true)
    try{
      const moviesValueAsync = await axios.post(`${process.env.REACT_APP_API_URL}/movies/get-movies`,{admin:isAdmin,email:email},{
        withCredentials:true
      })
      setErrorMessage('');
      setMoviesValues(moviesValueAsync.data)
    }catch(err:any){
      setErrorMessage('Something went wrong');
      setIsLoading(false);
      if(!isAdmin){
        regenerateTokenAsync(err,getMoviesValue,retry,navigate);
      }
    }
  }
  

  useEffect(()=>{
    getMoviesValue();
    setCurrentNavItem('movies')
  },[]);

  useEffect(() => {
    if(moviesValues.length > 0){
      setIsLoading(false)
    }
  },[moviesValues]);

  useEffect(()=>{
    getMoviesValue();
    setCurrentNavItem('movies')
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
        <AddModal  title='movie' elementsValue={moviesValues} setElementsValue={setMoviesValues} />
        :
        <DataElements title={'Movies'} type='movies' elementsValue={moviesValues} setElementsValue={setMoviesValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
    }
  </div>
  )
}

export default MoviePage