import React, { useEffect, useState } from 'react'

interface Props{
    labelText:string,
    inputId:string,
    inputValue:string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>,
}

const Textarea:React.FC<Props> = ({labelText,inputId,inputValue,setInputValue}) => {

    const [activeInput,setActiveInput] = useState<boolean>(false);

    // handlers
    const setActiveLabelHandler = (e:React.SyntheticEvent) =>{
        const target = e.target as HTMLInputElement;
        setInputValue(target.value);
        if(target.value.length){
            setActiveInput(true);            
        }else{
            setActiveInput(false);
        }
    }   
    const onBlurHandler = () =>{
        if(inputValue.length <= 0){
            setActiveInput(false)
        }
    }
    useEffect(()=>{
        if(inputValue.length <= 0){
            setActiveInput(false);
        }else{
            setActiveInput(true);

        }
    },[inputValue]);

    
    return (
        <div className="border-[1px] relative p-[0.1rem] pt-[0.5rem] rounded-[0.3rem]  border-black">
            <label htmlFor={inputId} className={`absolute bg-white px-[0.1rem] ml-[0.4rem] text-[0.9rem]  pointer-events-none transition-all ${activeInput ? 'top-[-10px] text-[0.8rem] text-[#426de3] ' : 'top-[20%] translate-y-[-50%]'} text-textInputGrey`}>{labelText}</label>
            <textarea onChange={(e:React.SyntheticEvent)=> setActiveLabelHandler(e)} value={inputValue || ''} rows={3} cols={4} onFocus={() => setActiveInput(true)} onBlur={() => onBlurHandler()} id={inputId} name={inputId} className='w-full px-1 py-2 resize-none outline-none' />
        </div>
    )
}

export default Textarea