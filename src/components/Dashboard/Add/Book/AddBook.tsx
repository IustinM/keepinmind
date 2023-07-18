import React, { useContext, useEffect, useState } from 'react'
import Input from '../../../utils/Input'
import Textarea from '../../../Navigation/utils/Textarea'
import AddText from './utils/AddText'
import TextItem from './utils/TextItem'
import { BookContext } from '../../../../context/BookContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Feeling from './Feeling/Feeling'
import { colors, feelingList, getRandomInt } from './Feeling/data'
import AddFelling from './Feeling/AddFelling'
import Page from './Page/Page'
import { PageContext } from '../../../../context/PageContainer'

export interface inputValueTypes {
    text:string,
    index:string
}

const AddBook:React.FC = () => {
   
    // context state values -->
    const {booksValue,setBooksValue,feelingsValue,setHideBookModal} = useContext(BookContext);
    const {setViewMenu} = useContext(PageContext);
    //<-- context state values 

    //local state values -->
    const [bookTitle,setBookTitle] = useState<string>('')
    const [bookDescription,setBookDescription] = useState<string>('');
    const [bookAuthor,setBookAuthor] = useState<string>('');
    const [enjoysValues,setEnjoysValues] = useState<inputValueTypes[]>([]);
    const [dislikesValues,setDislikesValues] = useState<inputValueTypes[]>([]);
    const [learnedValues,setLearnedValues] = useState<inputValueTypes[]>([]);
    //<-- local state values

    const addBookHandler = () => {
        setBooksValue([
            ...booksValue,{
            title:bookTitle,
            author:bookAuthor,
            description:bookDescription,
            enjoys:enjoysValues,
            dislikes:dislikesValues,
            learns:learnedValues,
            feelings:feelingsValue
        }
        ]);
    }
    useEffect(() =>{
        setViewMenu(false);
    },[])

    return (
        <div className='w-[80%] mx-auto '>
            <div className=" flex justify-between items-center">
                <h1 className=' text-[2.5rem] my-7'>Add a new book</h1>
                <div onClick={()=>setHideBookModal(false)} className="bg-default-red flex justify-center items-center text-white p-[0.3rem] rounded-[0.3rem] cursor-pointer ">
                    <FontAwesomeIcon className='w-[25px] h-[25px]' icon={faXmark}/>
                </div>
            </div>
            <div className="flex justify-between ">
                <div className="">
                <div className="">
                    <div className="w-[400px]">
                        <p className='mb-2 text-[1.2rem]'>Title of book</p>
                        <Input labelText={'Title'} inputId={'title_book'} inputValue={bookTitle} setInputValue={setBookTitle} />
                    </div>
                    <div className="w-[400px] my-7">
                        <p className='mb-2 text-[1.2rem]'>Author of book</p>
                        <Input labelText={'Author'} inputId={'author_book'} inputValue={bookAuthor} setInputValue={setBookAuthor} />
                    </div>
                    <div className="w-[400px]">
                        <p className='mb-2 text-[1.2rem]'>Description of book</p>
                        <Textarea inputValue={bookDescription} setInputValue={setBookDescription} labelText={'Description'} inputId={'description_book'}/>
                    </div>
                </div>
                <h2 className=' mt-4 text-[1.2rem]'>Feelings</h2>
                <div className=" flex flex-wrap w-[400px] ">
                    {feelingList.map((feeling:{type:string,color:string,id:string}) =><Feeling key={feeling.id} feeling={feeling}/>)}
                    <AddFelling />
                </div>
                <h2 className='mt-4 text-[1.2rem]'>Current Feelings:</h2>
                    <div className='flex flex-wrap w-[400px] '>
                        {feelingsValue.map((feeling:{type:string,color:string,id:string}) =><Feeling key={feeling.id} feeling={feeling} disable trash/>)}
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="w-[400px]">
                            <p className='mb-2 text-[1.2rem]'>What I enjoyed abut this book</p>
                            <AddText labelText={'What i enjoyed'} inputId={'enjoyed'} localValues={enjoysValues} setLocalValues={setEnjoysValues}/>
                        </div>
                        <div className="">
                                {enjoysValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item}localValues={enjoysValues} setLocalValues={setEnjoysValues} />
                                )}
                        </div>
                    </div>
                    <div className="my-7">
                        <div className="w-[400px]">
                            <p className='mb-2 text-[1.2rem]'>What I dislike abut this book</p>
                            <AddText  labelText={'What i dislike'} inputId={'dislikes'} localValues={dislikesValues} setLocalValues={setDislikesValues}/>
                        </div>
                        <div className="">
                                {dislikesValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item} localValues={dislikesValues} setLocalValues={setDislikesValues} />
                                )}
                        </div>
                    </div>
                    <div className="">
                        <div className="w-[400px]">
                            <p className='mb-2 text-[1.2rem]'>What I learned from this book</p>
                            <AddText labelText={'What i learned'} inputId={'learns'} localValues={learnedValues} setLocalValues={setLearnedValues}/>
                        </div>
                        <div className="">
                                {learnedValues.map((item:inputValueTypes) =>
                                    <TextItem key={item.index} item={item} localValues={learnedValues} setLocalValues={setLearnedValues} />
                                )}
                        </div>
                    </div>
                    <Page/>
                </div>
            </div>
            <div className=" flex justify-center mt-[2rem] mb-[1rem] ">
                <button onClick={addBookHandler}  className='w-[200px] bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Add Book</button>
            </div>
        </div>
    )
    }

export default AddBook