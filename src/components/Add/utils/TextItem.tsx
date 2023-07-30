import {  faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { inputValueTypes } from '../../utils/types'


interface Props{
    item:inputValueTypes,
    localValues:inputValueTypes[],
    setLocalValues:React.Dispatch<React.SetStateAction<inputValueTypes[]>>
}

const TextItem:React.FC<Props> = ({item,localValues,setLocalValues}) => {

  const [editMode,setEditMode] = useState<boolean>(true);
  const [isInput,setIsInput] = useState<boolean>(true);

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
    const deleteTextHandler = () =>{
        const items = [...localValues];
        const filterItems = items.filter(element =>{
            if(element.index !== item.index)
            return element;
        })
        setLocalValues([...filterItems]);
      }

    //this handlers decides is the text is too long
    const checkNumberOfWords = () =>{ 
        if(item.text.length < 40){
            setIsInput(true);
        }else{
            setIsInput(false);
        }
    }
   //<-- handlers
   
   useEffect(()=>{
    checkNumberOfWords();
    
   },[item]);
   useEffect(() => {
    if(editMode && item.text.length <= 0){
        deleteTextHandler();
    }
   },[editMode])

  return (
    <AnimatePresence key={item.index} mode='wait' initial={false}>
        <motion.div variants={variants} animate={'show'} initial='hidden' exit='exit' key={item.index}  className="flex items-center mt-2 w-[400px] min-h-[45px]">
        {isInput ?
            <div className='border-l-[1px] border-y-[1px] relative flex-1 p-[0.1rem] h-[46px] 
            flex items-center rounded-y-[0.3rem] rounded-l-[0.3rem] bg-white border-black' >
                <input id={`${item.index}input`} onChange={inputEditHandler} className='h-[43px] px-2 outline-none w-full' value={item.text} disabled={editMode}/>
            
            </div>
            :
            <div className="border-l-[1px] border-y-[1px] relative  flex items-center bg-white  rounded-l-[0.3rem] p-[0.1rem] h-[46px]  border-black">
            <textarea value={item.text} onChange={inputEditHandler}  disabled={editMode} id={`${item.index}input`} name={`${item.index}input`} className='w-full h-[43px]  rounded-r-[0.3rem] resize-none outline-none' />
        </div>
            }
        <label htmlFor={`${item.index}input`} onClick={() => setEditMode(!editMode)} className={`flex justify-center w-[50px] border-y-[1px] border-black hover:bg-editGreenHover transition-all items-center  text-white  ${!editMode ? 'bg-[#1bd1b6]' :'bg-editGreen'} min-h-[46px] cursor-pointer `}>
            <FontAwesomeIcon className=' h-[20px]' icon={faPencil}/>
        </label>      
        <div onClick={deleteTextHandler}  className="  flex justify-center w-[50px] border-r-[1px] border-y-[1px] border-black hover:bg-removeRedHover transition-all items-center rounded-r-[0.3rem] text-white bg-removeRed h-[46px] cursor-pointer ">
            <FontAwesomeIcon className=' h-[20px]' icon={faTrash}/>
        </div>      
    
    </motion.div>
</AnimatePresence>
  )
}

export default TextItem