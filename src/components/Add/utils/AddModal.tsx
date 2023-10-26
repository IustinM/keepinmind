import React, { useContext, useEffect, useState } from 'react';
import Input from '../../utils/Input';
import Textarea from '../../Navigation/utils/Textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import Feeling from './Feeling/Feeling';
import { feelingList } from './Feeling/data';
import AddFelling from './Feeling/AddFelling';
import { PageContext } from '../../../context/PageContainer';
import { inputValueTypes, itemValue } from '../../utils/types';
import AddText from './AddText';
import TextItem from './TextItem';
import Reminder from './Reminder/Reminder';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import EditColumn from './EditColumn/EditColumn';
import { returnInputTypeHandler } from './functions';
import axios from 'axios';

interface Props{
    title:string,
    elementsValue:(itemValue | inputValueTypes | any)[],
    setElementsValue:React.Dispatch<React.SetStateAction<(itemValue | inputValueTypes | any)[]>>,
    authorInput?:boolean
}

const AddModal:React.FC<Props> = ({title,elementsValue,setElementsValue,authorInput}) => {
   
    // context state values -->
    const {setViewMenu,setHideAddModal,editMode,setEditMode,currentEditElement,newColumns,setNewColumns, newColumnsValues, setNewColumnsValues,} = useContext(PageContext);
    //<-- context state values 

    //local state values -->
    const [elementTitle,setElementTitle] = useState<string>('')
    const [elementDescription,setElementDescription] = useState<string>('');
    const [titleAuthor,setTitleAuthor] = useState<string>('');
    const [enjoysValues,setEnjoysValues] = useState<inputValueTypes[]>([]);
    const [dislikesValues,setDislikesValues] = useState<inputValueTypes[]>([]);
    const [learnedValues,setLearnedValues] = useState<inputValueTypes[]>([]);
    const [disableAddButton,setDisableAddButton] = useState<boolean>(false);
    const [feelingsValue,setFeelingsValue] = useState<any>([]);
    //<-- local state values

    //this handlers add a new movie,day and book or edits them
    const addEditElementHandler = async() => {
        try{
            
        
        axios.post(`${process.env.REACT_APP_API_URL}/books/post-book`,{
            data:{
                title:elementTitle,
                author:titleAuthor,
                description:elementDescription,
                enjoys:JSON.stringify(enjoysValues),
                dislikes:JSON.stringify(dislikesValues),
                learns:JSON.stringify(learnedValues),
                feelings:JSON.stringify(feelingsValue),
                id:uuid()
            }
        }).then(result =>{
            console.log(result)
        })
        // if(!editMode){
        //     setElementsValue([
        //         ...elementsValue,{
        //             title:elementTitle,
        //             author:titleAuthor,
        //             description:elementDescription,
        //             enjoys:enjoysValues,
        //             dislikes:dislikesValues,
        //             learns:learnedValues,
        //             feelings:feelingsValue,
        //             id:uuid(),
        //         }
        //     ]);
        // }else{
        //         const items = [...elementsValue];
        //         const indexOfElement = items.findIndex(element => element.id === currentEditElement.id);
        //         items[indexOfElement]= {title:elementTitle,
        //             author:titleAuthor,
        //             description:elementDescription,
        //             enjoys:enjoysValues,
        //             dislikes:dislikesValues,
        //             learns:learnedValues,
        //             feelings:feelingsValue,
        //             id:currentEditElement.id
        //         };
        //         setElementsValue([...items]);
        // }
        // setEditMode(false);
        // setHideAddModal(false);
    }catch(err){
        console.log(err);
    }
    }

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

    //EFFECTS -->
    //this efects changes all the local state when edit mode is on
    useEffect(()=>{
        if(editMode){
            setElementTitle(currentEditElement.title);
            setElementDescription(currentEditElement.description);
            setTitleAuthor(currentEditElement.author);
            setEnjoysValues([...currentEditElement.enjoys]);
            setDislikesValues([...currentEditElement.dislikes]);
            setLearnedValues([...currentEditElement.learns]);
            setFeelingsValue([...currentEditElement.feelings])
        }
    },[]);

    //this effect allow to add or edit an element when all fields are completed
    useEffect(() => {
        if(authorInput){
            if(elementTitle.length > 1 &&feelingsValue.length > 0 && elementDescription.length > 2 && titleAuthor.length > 3 &&enjoysValues.length > 0 &&dislikesValues.length > 0 &&learnedValues.length > 0){
                setDisableAddButton(false);
            }else{
                setDisableAddButton(true);
            }
        }else{
            if(elementTitle.length > 1&&feelingsValue.length > 0 &&elementDescription.length > 2 &&enjoysValues.length > 0 &&dislikesValues.length > 0 &&learnedValues.length > 0){
                setDisableAddButton(false);
            }else{
                setDisableAddButton(true);
            }
            
        }
    },[elementTitle,elementDescription,titleAuthor,enjoysValues,dislikesValues,feelingsValue,learnedValues])
    
    const changeColumnValue = () =>{

    }
    useEffect(() =>{
        setViewMenu(false);
    },[]);
    //<-- EFFECTS

    return (
        <motion.div variants={variants} animate={'show'} initial='hidden' exit='exit' className='w-[80%] mx-auto '>
            <div className=" flex lg:w-[80%] lg:mx-auto mt-[1rem] flex-col ">
                <div onClick={()=>setHideAddModal(false)} className=" px-2 flex items-center p-[0.3rem] rounded-[0.3rem] cursor-pointer ">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className='mx-[0.5rem]'>Get back</span>
                </div>
                <h1 className=' text-[2.5rem] mb-7'>Add a new {title}</h1>
            </div>
            <div className="flex lg:flex-col lg:items-center  justify-between ">
                <div className=" lg:w-[80%] lg:mx-auto ">
                <div className="w-[400px] lg:w-full">
                    <div className="mb-7">
                        <p className='mb-2 text-[1.2rem]'>Title of {title}</p>
                        <Input labelText={'Title'} inputId={`title_${title}`} inputValue={elementTitle} setInputValue={setElementTitle} />
                    </div>
                    {authorInput &&
                    <div className="">
                        <p className='mb-2 text-[1.2rem]'>Author of {title}</p>
                        <Input labelText={'Author'} inputId={`author_${title}`} inputValue={titleAuthor} setInputValue={setTitleAuthor} />
                    </div>
                    }
                    <div className="mt-7">
                        <p className='mb-2 text-[1.2rem]'>Description of {title}</p>
                        <Textarea inputValue={elementDescription} setInputValue={setElementDescription} labelText={'Description'} inputId={`description_${title}`}/>
                    </div>
                </div>
                <h2 className=' mt-4 text-[1.2rem]'>Feelings</h2>
                <div className=" flex flex-wrap w-[400px] ">
                    {feelingList.map((feeling:{type:string,color:string,id:string}) =><Feeling key={feeling.id} feeling={feeling}  feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue}/>)}
                    <AddFelling />
                </div>
                <h2 className='mt-4 text-[1.2rem]'>Current Feelings:</h2>
                    <div className='flex flex-wrap w-[400px] '>
                        {feelingsValue.map((feeling:{type:string,color:string,id:string}) =><Feeling key={feeling.id} feeling={feeling}  feelingsValue={feelingsValue} setFeelingsValue={setFeelingsValue} disable trash/>)}
                    </div>
                    {/* {newColumns.map((column:any) => returnInputTypeHandler(column.type))} */}
                </div>
                <div className="mx-2 lg:my-5"></div>
                <div className="lg:w-[80%] w-[400px] lg:mx-auto ">
                    <div className="">
                        <div className="">
                            <p className='mb-2 text-[1.2rem]'>What I enjoyed about this {title}</p>
                            <AddText labelText={'What i enjoyed'} inputId={'enjoyed'} localValues={enjoysValues} setLocalValues={setEnjoysValues}/>
                        </div>
                        <div className="">
                                {enjoysValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item}localValues={enjoysValues} setLocalValues={setEnjoysValues} />
                                )}
                        </div>
                    </div>
                    <div className="my-7">
                        <div className="">
                            <p className='mb-2 text-[1.2rem]'>What I dislike about this {title}</p>
                            <AddText  labelText={'What i dislike'} inputId={'dislikes'} localValues={dislikesValues} setLocalValues={setDislikesValues}/>
                        </div>
                        <div className="">
                                {dislikesValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item} localValues={dislikesValues} setLocalValues={setDislikesValues} />
                                )}
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p className='mb-2 text-[1.2rem]'>What I learned from this {title}</p>
                            <AddText labelText={'What i learned'} inputId={'learns'} localValues={learnedValues} setLocalValues={setLearnedValues}/>
                        </div>
                        <div className="">
                                {learnedValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item} localValues={learnedValues} setLocalValues={setLearnedValues} />
                                )}
                        </div>
                    </div>
                    {/* <EditColumn/> */}
                </div>
            </div>
            <div className=" flex justify-center mt-[2rem] mb-[1rem] ">
                <button onClick={addEditElementHandler} disabled={disableAddButton} className={`w-[200px] ${!disableAddButton ? 'bg-default-red hover:bg-metal-red cursor-pointer' : 'bg-[#d6305799]'} h-[50px] transition-all text-white rounded-[0.5rem]`}>
                  {editMode ? `Edit ${title}`:  `Add ${title}`}
                </button>
            </div>
        </motion.div>
    )
    }

export default AddModal