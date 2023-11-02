import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react'
import { BookContext } from '../../../context/BookContext';
import { PageContext } from '../../../context/PageContainer';


import BookElement from './Element';
import Feeling from './Feeling/Feeling';
import { gradientGenerator, regenerateTokenAsync } from './functions';

interface Props{
    element:any,
    feelingsValue:any,
    setFeelingsValue:any
    elementsValue:any,
    setElementsValue:any,
    type:string,
}

const Elements:React.FC<Props> = ({element,feelingsValue,setFeelingsValue,elementsValue,setElementsValue,type}) => {

    const {editMode,setHideAddModal,setCurrentEditElement} = useContext(PageContext)
    const [expanded,setExpanded] = useState<boolean>(false);
    const {setBooksValue} = useContext(BookContext);
    const deleteElementHandler = async (retry = true) =>{
        try{
            const deleteBook = await axios.delete(`${process.env.REACT_APP_API_URL}/${type}/${element.id}`,{
                withCredentials:true
            })
            if(deleteBook){
                try{
                    const booksValueAsync = await axios.get(`${process.env.REACT_APP_API_URL}/${type}`,{
                      withCredentials:true
                    })
                    setBooksValue(booksValueAsync.data);
                    setHideAddModal(false)
                  }catch(err:any){
                    regenerateTokenAsync(err,deleteElementHandler,retry);
                  }
            }
        }catch(err){
            regenerateTokenAsync(err,deleteElementHandler,retry);
        }
        const items = [...elementsValue];
        const filterItems = items.filter(item =>{
            if(item.id !== element.id)
            return element;
        })
        setElementsValue([...filterItems]);
    }
   
    const editElementHandler = () =>{
        setHideAddModal(true);
        setCurrentEditElement(element);
    }
    

    return (
        <div style={{backgroundImage:gradientGenerator(element)}} className={`relative ${editMode ? 'flex justify-center items-center':''} px-[2.5rem] py-[1rem] w-[85%] min-h-[250px] mx-auto   text-white  rounded-[0.5rem] my-[3rem]`}>
            {editMode ?
             <>
                <div className="absolute top-[1.5rem] left-[1.5rem] text-[1.5rem]">{element.title}</div>
                <FontAwesomeIcon onClick={()=>deleteElementHandler()} className='w-[50px] h-[50px] cursor-pointer' icon={faTrash}/>
                <div className="mx-4"></div>
                <FontAwesomeIcon onClick={editElementHandler} className='w-[50px] h-[50px] cursor-pointer' icon={faPen}/>
            </> :
            <>
            <div className="absolute bg-white top-[1rem] right-[1rem] px-[1.2rem] text-black rounded-[0.5rem] py-[0.7rem]">
                { JSON.parse(element.feelings)[0].type}
            </div>
            <div className="mb-[1rem] ">
                <h2 className='text-[1.4rem]'>{element.title}</h2>
            </div>
            <div className="flex flex-col mb-4 ">
                <h3 className='bold text-[1.2rem]'>Description:</h3>
                <p className={` ${!expanded ? 'max-h-[190px]' : ''} overflow-hidden`}>{element.description}</p>
                {!expanded && <p className=''>{element.description.length > 90 && '...'}</p>}
            </div>
            <AnimatePresence>
            {expanded &&
            <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            exit={{ height: 0 }}
            key={"container"}
            className="">
                <BookElement description='What i enjoyed about book' elements={JSON.parse(element.enjoys)}/>
                <BookElement description='What i dislike about book' elements={JSON.parse(element.dislikes)}/>
                <BookElement description='What i learned from book' elements={JSON.parse(element.learns)}/>
            <h1>Other feelings:</h1>
            <div className='flex mb-6'>
                {JSON.parse(element.feelings).map((feeling:{type:string,color:string,id:string},index:number) => index > 0 && <Feeling key={feeling.id} feeling={feeling} feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue} disable/>)}
            </div>
            </motion.div>
            }
            </AnimatePresence>
            <div className=" pb-4">
                <button onClick={()=>setExpanded(!expanded)} className='px-[1.2rem] text-black bg-white  transition-all rounded-[0.5rem] py-[0.7rem] '>
                  {!expanded ? 'Expand' : 'Compress'}
                </button>
            </div>
        </>
        }
        </div>
    )
}
export default Elements
