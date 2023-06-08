import React from 'react'
import Content from '../Content/Content'
import PlusButton from '../utils/PlusButton'

const Dashboard:React.FC = () => {
  return (
    <div className=' w-full'>
        <PlusButton/>
        <Content/>
    </div>
  )
}

export default Dashboard