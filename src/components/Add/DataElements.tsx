import React from 'react'
import Elements from './utils/Elements';
import NoData from './utils/NoData';

interface Props{
    title:string
  elementsValue:any,
  setElementsValue:any,
  feelingsValue:any,
  setFeelingsValue:any,
}

const DataElements:React.FC<Props> = ({title,elementsValue,setElementsValue,feelingsValue,setFeelingsValue}) => {

  return (
    <div>
        <h2 className="text-[3rem] w-[85%] mx-auto mt-[2rem]">{title}</h2>
        <div className="">
          {
          elementsValue.length > 0 ?
          elementsValue.map((book:any,index:number)=>
            <Elements key={index} element={book} feelingsValue={feelingsValue}  elementsValue={elementsValue} setElementsValue = {setElementsValue} setFeelingsValue={setFeelingsValue}/>
          )
          :
          <NoData name='books'/>
        }
        </div>
    </div>
  )
}

export default DataElements