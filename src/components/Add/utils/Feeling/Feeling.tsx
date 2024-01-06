import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { MovieContext } from '../../../../context/MovieContext'

interface Props{
    feeling:{
      type:string,
      color:string,
      id:string,
    },
    disable?:boolean,
    trash?:boolean,
    feelingsValue:any,
    setFeelingsValue:any
}

const Feeling:React.FC<Props> = ({feeling,disable,trash,feelingsValue,setFeelingsValue}) => {

  const setFeelingHandler = ():void => {
    let valueRight = true;
    
    //this part checks if the state context already have the feeling
    for(let i = 0; i<= feelingsValue.length -1;i++){
      if(feelingsValue[i].id === feeling.id) valueRight=false;
    }

    if(!disable && valueRight && feelingsValue.length <4){
      setFeelingsValue([...feelingsValue,feeling])
    }
  }

  const deleteFeelingHandler = ():void =>{
    const items = [...feelingsValue];
    const filterItems = items.filter(element =>{
        if(element.id !== feeling.id)
        return element;
    })
    setFeelingsValue([...filterItems]);
  }

  return (
    <div 
    onClick={setFeelingHandler}
    style={{background:feeling.color}}
    className="flex min-h-[40px] md:text-[0.9rem]  items-center  mr-[0.5rem] py-[0.5rem] cursor-pointer px-[1rem] rounded-[0.5rem] justify-center mt-3 text-white">
        <span>{feeling.type} </span>
        {trash && <FontAwesomeIcon onClick={deleteFeelingHandler} className='mx-2 ' icon={faTrash}/>}
    </div>
  )
}

export default Feeling