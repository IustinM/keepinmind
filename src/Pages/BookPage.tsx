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
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Loading from './Loading'
import LoadingCircle from '../components/utils/LoadingCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const BookPage:React.FC = () => {

  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string>('');
  const {hideAddModal,setCurrentNavItem,loadingApp,setLoadingApp} = useContext(PageContext);
  const {booksValue,setBooksValue,feelingsValue,setFeelingsValue} = useContext(BookContext);
  const {isAdmin,email} = useContext(UserContext);
  const navigate = useNavigate();  

  const getBooksValue = async(retry=true) =>{
    setIsLoading(true)
    try{
      const booksValueAsync = await axios.post(`${process.env.REACT_APP_API_URL}/books/get-books`,{admin:isAdmin,email:email},{
        withCredentials:true
      })
      setErrorMessage('');
      
      setBooksValue(booksValueAsync.data)

    }catch(err:any){
      setErrorMessage('Something went wrong');
      setIsLoading(false)
      if(!isAdmin){
        regenerateTokenAsync(err,getBooksValue,retry,navigate);
      }
    }
  }
  
  useEffect(()=>{
    getBooksValue();
    setCurrentNavItem('books')
  },[]);
  useEffect(() => {
    if(booksValue.length > 0){
      setIsLoading(false)
    }
  },[booksValue])

  useEffect(()=>{
    getBooksValue();
    setCurrentNavItem('books')

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
        <AnimatePresence>
        {hideAddModal ? 
        <AddModal title='book' elementsValue={booksValue} setElementsValue={setBooksValue}  authorInput />
        :
        <DataElements title='Books' type='books' elementsValue={booksValue} setElementsValue={setBooksValue} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>}
        </AnimatePresence>
    </div>
      }
  </div>
  )
}

export default BookPage