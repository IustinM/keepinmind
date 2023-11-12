import React, { useContext, useEffect, useState } from 'react'
import MenuContainer from '../components/PlusMenu/MenuContainer'
import Navigation from '../components/Navigation/Navigation'
import { PageContext } from '../context/PageContainer'
import AddModal from '../components/Add/utils/AddModal'
import { BookContext } from '../context/BookContext'
import DataElements from '../components/Add/DataElements'
import { AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { regenerateTokenAsync } from '../components/Add/utils/functions'


const BookPage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem,loadingApp,setLoadingApp} = useContext(PageContext);
  const {booksValue,setBooksValue,feelingsValue,setFeelingsValue} = useContext(BookContext);
  

  const getBooksValue = async(retry=true) =>{

    try{
      const booksValueAsync = await axios.get(`${process.env.REACT_APP_API_URL}/books`,{
        withCredentials:true
      })
      setBooksValue(booksValueAsync.data)
    }catch(err:any){
      regenerateTokenAsync(err,getBooksValue,retry);
    }
  }
  
  useEffect(()=>{
    getBooksValue();
    setCurrentNavItem('books')
    // setTimeout(() => {
    //   setLoadingApp(false);
    // },3000)
  },[])
  return (
    <div className="flex lg:flex-col">
      {loadingApp && setLoadingApp}
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        <AnimatePresence>
        {hideAddModal ? 
        <AddModal title='book' elementsValue={booksValue} setElementsValue={setBooksValue}  authorInput />
        :
        <DataElements title='Books' type='books' elementsValue={booksValue} setElementsValue={setBooksValue} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
        </AnimatePresence>
    </div>
  </div>
  )
}

export default BookPage