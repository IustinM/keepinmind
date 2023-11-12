import React from 'react'
import LoadingCircle from '../../components/utils/LoadingCircle'

interface Props{
    text:string,
    disableButton:boolean,
    isLoading:boolean
}

const FormButton:React.FC<Props> = ({text,disableButton,isLoading}) => {
  return (
    <button type='submit' disabled={disableButton} className={`w-full ${disableButton ? 'bg-disabledButtonRed' :  'bg-default-red  hover:bg-metal-red'} h-[50px] transition-all text-white rounded-[0.5rem]`}>
        {isLoading ? <LoadingCircle width={35} height={35}/>  : text}
    </button>
  )
}

export default FormButton