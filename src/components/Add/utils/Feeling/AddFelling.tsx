import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MovieContext } from '../../../../context/MovieContext';
import { colors, } from './data';

const AddFelling:React.FC =memo(({}) => {

    //context
    const {feelingsValue,setFeelingsValue} = useContext(MovieContext);
    const backgroundColor = colors[1];
    
    //local state
    const [localFeelingValue,setLocalFeelingValue] = useState<string>('');

    //handlers -->
    const changeFeelingHandler = (e:React.SyntheticEvent):void =>{
        const target = e.target as HTMLInputElement;
        setLocalFeelingValue(target.value)
    }
    
    const addFeelingHandler = () =>{
        if(feelingsValue.length < 4 && localFeelingValue.length > 0){
            setFeelingsValue([...feelingsValue,{type:localFeelingValue,color:backgroundColor,id:uuid()}])
        }
    }
    //<-- handlers 


    return (
      <div 
        style={{background:backgroundColor}}
        className="flex min-h-[40px] md:text-[0.9rem] cursor-pointer items-center transition-all w-[140px] relative  mr-[0.5rem]  rounded-[0.5rem] justify-center mt-3 text-white">
            <input
           
            style={{background:backgroundColor}}
            placeholder='Add Feeling'
            id='feeling_input'
            onChange={changeFeelingHandler}
            className='min-h-[40px] placeholder:text-white  w-[75%] pl-[0.5rem] py-[0.2rem] outline-none rounded-l-[0.5rem]'
            />
            <FontAwesomeIcon   onClick={addFeelingHandler} className=' mx-2 ' icon={faPlus}/>

      </div>
    )
  }
)
export default AddFelling