import axios from "axios";
import { SetStateAction, useState } from "react";
import Textarea from "../../Navigation/utils/Textarea";
import Input from "../../utils/Input";
import Select from "../../utils/Select";
import TextItem from "./TextItem";

export const gradientGenerator = (element:any) => {
    const feelings = JSON.parse(element.feelings)
    switch(feelings[0].type.toLowerCase()){
        case 'sadness':
            return 'linear-gradient(157deg, rgba(9,9,121,1) 31%, rgba(0,142,255,1) 100%)';
        case 'happiness':
            return 'linear-gradient(157deg, rgba(204,84,10,1) 16%, rgba(255,248,0,1) 100%)';
        case  'admiration':
            return 'linear-gradient(157deg, rgba(47,138,0,1) 16%, rgba(66,255,31,1) 100%)';
        case 'fear':
            return 'linear-gradient(157deg, rgba(0,0,0,1) 16%, rgba(133,133,133,1) 100%)';
        case 'pleasure':
            return 'linear-gradient(157deg, rgba(139,21,149,1) 16%, rgba(255,0,121,1) 100%)';
        default :
            return 'linear-gradient(157deg, rgba(255,0,0,1) 16%, rgba(255,175,0,1) 100%)';
        }
}

export const returnInputTypeHandler = (type:string,title:string,inputValue:any,setInputValue:React.Dispatch<React.SetStateAction<any>>,inputId:string):JSX.Element =>{

    switch(type.toLowerCase()){
        case 'input':{
            return <Input labelText={title} inputId={inputId} inputValue={inputValue} setInputValue={setInputValue}/>
        };
        case "textarea" :{
            return <Textarea inputValue={inputValue} setInputValue={setInputValue} labelText={title} inputId={`description_${title}`}/>
        }
        case "category-input":{
            return inputValue.map((item:any) =><TextItem item={item} localValues={inputValue} setLocalValues={setInputValue} /> )
        }
        default:{
            return <Input labelText={title} inputId={inputId} inputValue={inputValue} setInputValue={setInputValue}/>
        }
    }
}
export const regenerateTokenAsync = async (err:any,callback:any,retry:boolean,navigate:any) =>{
  
    if (err.response && err.response.status === 401  && retry) {
        try {
            const tokenResult = await axios.post(`${process.env.REACT_APP_API_URL}/regenerate-token`, {}, {
                withCredentials: true
            });
            callback(false);
            
        } catch (tokenError:any) {
            if(tokenError.response.data.missingToken){
                try{
                    axios.get(`${process.env.REACT_APP_API_URL}/logout`,{
                        withCredentials:true
                    }).then(result =>{
                        if(result.status !== 200){
                            console.error('Something went wrong');
                            return;
                        }
                        localStorage.removeItem('userInfo');
                        navigate('/login')
                    })
                }catch(err){
                    console.log(err);
                }
            }
            console.log(tokenError);
        }
    } 
}