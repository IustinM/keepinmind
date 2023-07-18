import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import Feeling from '../../Dashboard/Add/Book/Feeling/Feeling';
import BookElement from './BookElemen';

interface Props{
    book:any,
}

const Book:React.FC<Props> = ({book}) => {

    const [expanded,setExpanded] = useState<boolean>(false);

    const gradientGenerator = () => {
        switch(book.feelings[0].type.toLowerCase()){
            case 'sadness':
                return 'linear-gradient(157deg, rgba(9,9,121,1) 31%, rgba(0,142,255,1) 100%)';
            case 'happiness':
                return 'linear-gradient(157deg, rgba(204,84,10,1) 16%, rgba(255,248,0,1) 100%)';
            case  'admiration':
                return 'linear-gradient(157deg, rgba(47,138,0,1) 16%, rgba(66,255,31,1) 100%)';
            case 'fear':
                return 'linear-gradient(157deg, rgba(0,0,0,1) 16%, rgba(133,133,133,1) 100%)';
            case 'pleasure':
                return 'linear-gradient(157deg, rgba(139,21,149,1) 16%, rgba(255,0,121,1) 100%)';
            default :
                return 'linear-gradient(157deg, rgba(255,0,0,1) 16%, rgba(255,175,0,1) 100%)';
            }
    }
    
    return (
        <div style={{backgroundImage:gradientGenerator()}} className='relative px-[2.5rem] py-[1rem] w-[85%] mx-auto   text-white  rounded-[0.5rem] my-[3rem]'>
            <div className="absolute bg-white top-[1rem] right-[1rem] px-[1.2rem] text-black rounded-[0.5rem] py-[0.7rem]">
                {book.feelings[0].type}
            </div>
            <div className="mb-[1rem] ">
                <h2 className='text-[1.4rem]'>{book.title}</h2>
                <h3 className='text-[1rem]'>by {book.author}</h3>
            </div>
            <div className="flex flex-col mb-4 ">
                <h3 className='bold text-[1.2rem]'>Description:</h3>
                <p className={` ${!expanded ? 'max-h-[190px]' : ''} overflow-hidden`}>{book.description}</p>
                {!expanded && <p className=''>{book.description.length > 90 && '...'}</p>}
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
                <BookElement description='What i enjoyed about book' elements={book.enjoys}/>
                <BookElement description='What i dislike about book' elements={book.dislikes}/>
                <BookElement description='What i learned from book' elements={book.learns}/>
            <h1>Other feelings:</h1>
            <div className='flex mb-6'>
                {book.feelings.map((feeling:{type:string,color:string,id:string},index:number) => index > 0 && <Feeling key={feeling.id} feeling={feeling} disable/>)}
            </div>
            </motion.div>
            }
            </AnimatePresence>
            <div className=" pb-4">
                <button onClick={()=>setExpanded(!expanded)} className='px-[1.2rem] text-black bg-white  transition-all rounded-[0.5rem] py-[0.7rem] '>
                  {!expanded ? 'Expand' : 'Compress'}
                </button>
            </div>
            
        </div>
  )
}
export default Book
