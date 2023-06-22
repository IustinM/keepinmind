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
    const [localValues,setLocalValues] = useState<inputValueTypes[]>([]);

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
                        <AddText labelText={'What i enjoyed'} inputId={'enjoyed'} localValues={localValues} setLocalValues={setLocalValues}/>
                    </div>
                    <div className="">
                        {localValues.map((item:inputValueTypes,index:number) =>
                        <AnimatePresence><TextItem key={item.index} item={item} localValues={localValues} setLocalValues={setLocalValues} /></AnimatePresence>
                       )}
                    </div>
                </div>
                <div className="w-[400px] mt-[11px] mb-7">
                    <p className='mb-2 text-[1.2rem]'>What I dislike abut this book</p>
                    <Input labelText={'What i dislike'} inputId={'title_book'} inputValue={''} setInputValue={function (value: React.SetStateAction<string>): void {
                          throw new Error('Function not implemented.')
                      } } />
                </div>
                <div className="w-[400px]">
                    <p className='mb-2 text-[1.2rem]'>What i have learned</p>
                    <Input labelText={'Learned'} inputId={'title_book'} inputValue={''} setInputValue={function (value: React.SetStateAction<string>): void {
                          throw new Error('Function not implemented.')
                      } } />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AddBook