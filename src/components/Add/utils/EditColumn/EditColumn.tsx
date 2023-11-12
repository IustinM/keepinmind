import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../../../context/PageContainer';
import Input from '../../../utils/Input';
import { v4 as uuid } from 'uuid';
import Select from '../../../utils/Select';


const EditColumn = () => {

    const {newColumns,setNewColumns} = useContext(PageContext);
    // local state -->
    const [disableAddButton,setDisableAddButton] = useState<boolean>(true)
    const [columnType,setColumnType] = useState<string>('');
    const [columnTitle,setColumnTitle] = useState<string>('')
    const [columnDescription,setColumnDescription] = useState<string>('');
    //<-- local state 


    const addColumnHandler = ():void=>{
        const column = {
        id:uuid(),
        order:newColumns.length,
        title:columnTitle,
        description:columnDescription,
        type:columnType
        }   
        if(newColumns.length > 0){
            setNewColumns([...newColumns,column])
        }else{
            setNewColumns([column])
        }
    }


    useEffect(() =>{
        if(columnTitle.length > 0 && columnDescription.length >0 && columnType.length>0){
            setDisableAddButton(false);
        }else{
            setDisableAddButton(true);
        }
    },[columnTitle,columnDescription,columnType])

  return (
    <div className='w-[400px]'>
        <h1 className='text-[1.2rem] mt-[2rem] mb-[1rem]'>Add or edit current columns</h1>
        <div className="">
            <Select data={['Select', 'Input' ,"Textarea" ,"Category-Input"]} label={'Column Type'} setValue={setColumnType}/>
            <div className="my-4"></div>
            <Input labelText={'Column Title'} inputId={'edit_column_title'} inputValue={columnTitle} setInputValue={setColumnTitle}/>
            <div className="my-4"></div>
            <Input labelText={'Column Description'} inputId={'edit_column_description'} inputValue={columnDescription} setInputValue={setColumnDescription}/>
        </div>
        <div className=" flex mt-[1rem]">
            <button disabled={disableAddButton} onClick={addColumnHandler} className={`  ${!disableAddButton ? 'bg-default-red hover:bg-metal-red cursor-pointer' : 'bg-[#d6305799]'} w-[200px] h-[50px] transition-all text-white rounded-[0.5rem]`}>
                Edit Columns
            </button>
        </div>
    </div>
  )
}

export default EditColumn