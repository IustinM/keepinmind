import React, { useContext, useEffect } from 'react';
import MenuContainer from '../components/PlusMenu/MenuContainer';
import Navigation from '../components/Navigation/Navigation';
import { PageContext } from '../context/PageContainer';
import AddModal from '../components/Add/utils/AddModal';
import {MovieContext} from '../context/MovieContext';
import DataElements from '../components/Add/DataElements';

const MoviePage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {moviesValues,setMoviesValues,feelingsValue,setFeelingsValue} = useContext(MovieContext);

  useEffect(()=>{
    setCurrentNavItem('movies')
  },[])

  return (
    <div className="flex">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        {hideAddModal ? 
        <AddModal  title='movie' elementsValue={moviesValues} setElementsValue={setMoviesValues} />
        :
        <DataElements title={'Movies'} elementsValue={moviesValues} setElementsValue={setMoviesValues} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
    </div>
  </div>
  )
}

export default MoviePage