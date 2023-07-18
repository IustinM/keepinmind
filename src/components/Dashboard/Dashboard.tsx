import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext'
import Content from '../Content/Content'
import AddBook from './Add/Book/AddBook'
import MenuContainer from './PlusMenu/MenuContainer'

const Dashboard:React.FC = () => {

  const {hideBookModal} = useContext(BookContext);

  return (
    <div className=' w-full'>
        <MenuContainer/>
        {hideBookModal ? 
        <AddBook/>
        :
        <Content/>}
    </div>
  )
}

export default Dashboard