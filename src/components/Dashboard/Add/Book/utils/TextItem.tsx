import {  faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { inputValueTypes } from '../AddBook'

interface Props{
    item:inputValueTypes,
    localValues:inputValueTypes[],
    setLocalValues:React.Dispatch<React.SetStateAction<inputValueTypes[]>>
}

const TextItem:React.FC<Props> = ({item,localValues,setLocalValues}) => {

  const [editMode,setEditMode] = useState<boolean>(true);

  const variants = {
    hidden: { 
        y:'50%',
        opacity: 0 
    },
    exit: { 
        y:'10%',
        opacity: 0 
    },
    show: {
      opacity: 1,
      y:'0%',
      transition: {
        delayChildren: 0.5
      }
    }
  }
  
  //handlers -->
  //this handler is edit the text
  const inputEditHandler = (e:React.SyntheticEvent) =>{
      const target = e.target as HTMLInputElement;
      const items = [...localValues];
      const indexOfElement = items.findIndex(element => element.index === item.index);
      items[indexOfElement]= {text:target.value,index:item.index};
      setLocalValues([...items]);
    }
    //this handler delete the text
    const deleteTextHandler = (e:React.SyntheticEvent) =>{
        const target = e.target as HTMLInputElement;
        const items = [...localValues];
        const filterItems = items.filter(element =>{
            if(element.index !== item.index)
            return element;
        })
        setLocalValues([...filterItems]);
      }
   //<-- handlers 

  return (
    <motion.div variants={variants} animate={'show'} initial='hidden' exit='exit' key={item.index}  className="flex items-center mt-2 w-[400px]">
        <div className='border-l-[1px] border-y-[1px] relative flex-1 p-[0.1rem] h-[46px] 
         flex items-center rounded-y-[0.3rem] rounded-l-[0.3rem]  border-black' >
             <input id={`${item.index}input`} onChange={inputEditHandler} className='h-[44px] px-2 outline-none w-full' value={item.text} disabled={editMode}/>
        
        </div>
    <label htmlFor={`${item.index}input`} onClick={() => setEditMode(!editMode)} className={`flex justify-center w-[50px] border-y-[1px] border-black hover:bg-editGreenHover transition-all items-center  text-white  ${!editMode ? 'bg-[#1bd1b6]' :'bg-editGreen'} h-[46px] cursor-pointer `}>
        <FontAwesomeIcon className=' h-[20px]' icon={faPencil}/>
    </label>      
    <div onClick={deleteTextHandler}  className="  flex justify-center w-[50px] border-r-[1px] border-y-[1px] border-black hover:bg-removeRedHover transition-all items-center rounded-r-[0.3rem] text-white bg-removeRed h-[46px] cursor-pointer ">
        <FontAwesomeIcon className=' h-[20px]' icon={faTrash}/>
    </div>      
    <div className="h-[10px]"></div>
</motion.div>
  )
}

export default TextItem