import React, { useContext, useEffect } from 'react';
import MenuContainer from '../components/PlusMenu/MenuContainer';
import Navigation from '../components/Navigation/Navigation';
import { PageContext } from '../context/PageContainer';
import AddModal from '../components/Add/utils/AddModal';
import {MovieContext} from '../context/MovieContext';
import DataElements from '../components/Add/DataElements';
import axios from 'axios';
import { regenerateTokenAsync } from '../components/Add/utils/functions';

const MoviePage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {moviesValues,setMoviesValues,feelingsValue,setFeelingsValue} = useContext(MovieContext);

  const getDaysValue = async(retry=true) =>{

    try{
      const moviesValueAsync = await axios.get(`${process.env.REACT_APP_API_URL}/movies`,{
        withCredentials:true
      })
      setMoviesValues(moviesValueAsync.data)
    }catch(err:any){
      regenerateTokenAsync(err,getDaysValue,retry);
    }
  }
  

  useEffect(()=>{
    getDaysValue();
    setCurrentNavItem('movies')
  },[])
  return (
    <div className="flex lg:flex-col">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        {hideAddModal ? 
        <AddModal  title='movie' elementsValue={moviesValues} setElementsValue={setMoviesValues} />
        :
        <DataElements title={'Movies'} type='movies' elementsValue={moviesValues} setElementsValue={setMoviesValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
  </div>
  )
}

export default MoviePage