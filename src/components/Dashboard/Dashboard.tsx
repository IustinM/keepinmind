import React from 'react'
import Content from '../Content/Content'
import AddBook from './Add/Book/AddBook'
import MenuContainer from './PlusMenu/MenuContainer'

const Dashboard:React.FC = () => {
  return (
    <div className=' w-full'>
        <MenuContainer/>
        {/* <Content/> */}
        <AddBook/>
    </div>
  )
}

export default Dashboard