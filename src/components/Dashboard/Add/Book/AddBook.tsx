import React, { useState } from 'react'
import Input from '../../../utils/Input'
import Textarea from '../../../Navigation/utils/Textarea'
import AddText from './utils/AddText'
import TextItem from './utils/TextItem'
import { AnimatePresence } from 'framer-motion'

export interface inputValueTypes {
    text:string,
    index:string
}

const AddBook:React.FC = () => {
    const [enjoysValues,setEnjoysValues] = useState<inputValueTypes[]>([]);
    const [dislikesValues,setDislikesValues] = useState<inputValueTypes[]>([]);
    const [learnedValues,setLearnedValues] = useState<inputValueTypes[]>([]);

  return (
    <div>
        <h1 className='w-[80%] mx-auto text-[2.5rem] my-7'>Add a new book</h1>
        <div className="flex justify-between w-[80%] mx-auto">
            <div className="">
            <div className="">
                <div className="w-[400px]">
                    <p className='mb-2 text-[1.2rem]'>Title of book</p>
                    <Input labelText={'Title'} inputId={'title_book'} inputValue={''} setInputValue={function (value: React.SetStateAction<string>): void {
                              throw new Error('Function not implemented.')
                          } } />
                </div>
                <div className="w-[400px] my-7">
                    <p className='mb-2 text-[1.2rem]'>Author of book</p>
                    <Input labelText={'Author'} inputId={'author_book'} inputValue={''} setInputValue={function (value: React.SetStateAction<string>): void {
                              throw new Error('Function not implemented.')
                          } } />
                </div>
                <div className="w-[400px]">
                    <p className='mb-2 text-[1.2rem]'>Description of book</p>
                    <Textarea labelText={'Description'} inputId={'description_book'}/>
                </div>
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
                                <TextItem key={item.index} item={item} localValues={enjoysValues} setLocalValues={setEnjoysValues} />
                            )}
                    </div>
                </div>
                <div className="my-7">
                    <div className="w-[400px]">
                        <p className='mb-2 text-[1.2rem]'>What I dislike abut this book</p>
                        <AddText labelText={'What i dislike'} inputId={'dislikes'} localValues={dislikesValues} setLocalValues={setDislikesValues}/>
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
            </div>
        </div>
      
    </div>
  )
}

export default AddBook