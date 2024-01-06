import React, { useContext } from 'react'
import { PageContext } from '../../context/PageContainer';
import Elements from './utils/Elements';
import NoData from './utils/NoData';

interface Props{
    title:string
  elementsValue:any,
  setElementsValue:any,
  feelingsValue:any,
  setFeelingsValue:any,
  type:string,
}

const DataElements:React.FC<Props> = ({title,elementsValue,setElementsValue,feelingsValue,setFeelingsValue,type}) => {

  const {sorted} = useContext(PageContext);
  
  return (
    <div>
        <h2 className="text-[3rem] w-[85%] mx-auto mt-[2rem] lg 
         placeholder::text-[2rem] md:text-[1.6rem] ">{title}</h2>
        <div className="">
          {
          elementsValue.length > 0 ?
          sorted && elementsValue.length > 0 ? 
          [...elementsValue].sort((a:any, b:any) => a.title.localeCompare(b.title)).map((book:any,index:number)=>
            <Elements key={index} element={book} type={type} feelingsValue={feelingsValue}  elementsValue={elementsValue} setElementsValue = {setElementsValue} setFeelingsValue={setFeelingsValue}/>
          )
          :
          elementsValue.map((book:any,index:number)=>
            <Elements key={index} type={type} element={book} feelingsValue={feelingsValue}  elementsValue={elementsValue} setElementsValue = {setElementsValue} setFeelingsValue={setFeelingsValue}/>
          )
          :
          <NoData name={title.toLowerCase()}/>
        }
        </div>
    </div>
  )
}

export default DataElements