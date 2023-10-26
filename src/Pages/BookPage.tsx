import React, { useContext, useEffect } from 'react'
import MenuContainer from '../components/PlusMenu/MenuContainer'
import Navigation from '../components/Navigation/Navigation'
import { PageContext } from '../context/PageContainer'
import AddModal from '../components/Add/utils/AddModal'
import { BookContext } from '../context/BookContext'
import DataElements from '../components/Add/DataElements'
import { AnimatePresence } from 'framer-motion'


const BookPage:React.FC = () => {

  const {hideAddModal,setCurrentNavItem} = useContext(PageContext);
  const {booksValue,setBooksValue,feelingsValue,setFeelingsValue} = useContext(BookContext);

  useEffect(()=>{
    setCurrentNavItem('books')
  },[])
  return (
    <div className="flex lg:flex-col">
    <Navigation/>
    <div className="min-w-[300px] max-w-[300px]"></div>
    <div className=' w-full'>
        <MenuContainer/>
        <AnimatePresence>
        {hideAddModal ? 
        <AddModal title='book' elementsValue={booksValue} setElementsValue={setBooksValue}  authorInput />
        :
        <DataElements title='Books' elementsValue={booksValue} setElementsValue={setBooksValue} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
        </AnimatePresence>
    </div>
  </div>
  )
}

export default BookPage