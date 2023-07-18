import React, { useState } from 'react'
import Textarea from '../../../../Navigation/utils/Textarea';
import Input from '../../../../utils/Input';
import Select from '../../../../utils/Select';
import { days, hours } from './data';

const Page = () => {

    const [pageDescription,setPageDescription] = useState<string>('');
    const [emailAddress,setEmailAddress] = useState<string>('');
    const [activeSetReminder,setActivesetReminder] = useState<boolean>(false);

  return (
    <div className='w-[400px]'>
        <h1 className='text-[1.2rem] mt-[2rem] mb-[1rem]'>Add a qoute/text or paragraph from a certain page</h1>
        <Textarea inputValue={pageDescription} setInputValue={setPageDescription} labelText={'Page description'} inputId={'description_book_page'}/>
        
        {
        activeSetReminder &&
        <div className="">
        <div className="mt-[1rem]">
            <Input labelText={'Email Address'} inputId={'email_address'} inputValue={emailAddress} setInputValue={setEmailAddress} />
        </div>
            <div className="flex">
                <div className="w-[65%]">
                    <Select data={days} label="Day"/>
                </div>
                <div className="mx-1"></div>
                <div className="w-[35%]">
                    <Select data={hours} label="Hour"/>
                </div>
            </div>
        </div>
        }
        <div className=" flex mt-[1rem]">
            <button onClick={()=>setActivesetReminder(!activeSetReminder)} className='w-[200px] bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>
                {activeSetReminder ? 'Cancel Reminder' : 'Set reminder'}
            </button>
        </div>
    </div>
  )
}

export default Page