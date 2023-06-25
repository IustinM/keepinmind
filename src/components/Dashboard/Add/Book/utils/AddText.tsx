import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Input from '../../../../utils/Input';
import { inputValueTypes } from '../AddBook';
import { v4 as uuid } from 'uuid';

interface Props{
    labelText:string,
    inputId:string,
    localValues:inputValueTypes[],
    setLocalValues:React.Dispatch<React.SetStateAction<inputValueTypes[]>>
}

const AddText:React.FC<Props> = ({labelText,inputId,localValues,setLocalValues}) => {

    const [localInputValue,setLocalInputValue] = useState<string>('');
    const setInputValuesHandler = () =>{
        if(localInputValue.length > 0){
            setLocalValues([...localValues,{text:localInputValue,index:uuid()}]);
            setLocalInputValue('');
        }
    }
    
    return (
        <div className="flex w-[400px]">

            <div className="flex-1">
                <Input inputValue={localInputValue} setInputValue={setLocalInputValue} labelText={labelText}  inputId={inputId} specialStyle />
            </div>
            <div onClick={setInputValuesHandler} className="  flex justify-center w-[50px] border-r-[1px] border-black items-center rounded-r-[0.3rem] text-white bg-ashBlack h-[46px] cursor-pointer ">
                <FontAwesomeIcon className=' h-[20px]' icon={faPlus}/>
            </div>      
        </div>
    )
}

export default AddText