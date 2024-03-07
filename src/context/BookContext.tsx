import { createContext, useState } from "react";
import { inputValueTypes, itemValue } from "../components/utils/types";


export const BookContext = createContext<any>('');


 const BookProvider = ({children}:{children:any}) =>{

    const [booksValue,setBooksValue] = useState<itemValue[]>([...mockData]);
    const [feelingsValue,setFeelingsValue] = useState<itemValue[]>([]);
    

    return(
        <BookContext.Provider value={{
        booksValue,
        setBooksValue,
        feelingsValue,
        setFeelingsValue
        }}>
            {children}
        </BookContext.Provider>
        )
}

export default BookProvider;

const mockData = [
    {
      "title": "A man called Ove",
      "description": "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door. \n\n",
      "author": "Frederik Backman",
      "enjoys": "[{\"text\":\"The plot\",\"index\":\"5516ac33-3172-435c-bce1-eaccfdc89207\"},{\"text\":\"The characters\",\"index\":\"815c7eb3-0bca-493e-bb59-7e6a651240d5\"}]",
      "dislikes": "[{\"text\":\"I liked everything\",\"index\":\"67204f21-fd59-4bbe-8c06-788d7dbc340a\"}]",
      "learns": "[{\"text\":\"A lot of things\",\"index\":\"c88ad9c4-e97b-4cc7-b2b9-2a15e53d43f9\"}]",
      "feelings": "[{\"type\":\"Happiness\",\"color\":\"#edd91f\",\"id\":\"d7019131-608d-40ce-a499-70c5d4926413\"},{\"type\":\"Pleasure\",\"color\":\"#e84daf\",\"id\":\"a667236f-af6e-4871-84b5-0bb0458dbcad\"},{\"type\":\"Sadness\",\"color\":\"#002791\",\"id\":\"8338dd0c-b2e6-4694-b83b-9af320a6a3fb\"}]",
      "id": "997e9447-a996-482b-84f1-9eac3a5b61da",
      "user_email": "admin"
    },
    {
      "title": "Atomic Habits",
      "description": "\nA supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less",
      "author": "James Clear",
      "enjoys": "[{\"text\":\"Habbits are very important\",\"index\":\"c3618449-59ba-44c3-b303-0b26e5ea36e9\"}]",
      "dislikes": "[{\"text\":\"Is not very clear\",\"index\":\"ca8ccd5e-d209-4595-8c5c-5680eb646340\"}]",
      "learns": "[{\"text\":\"To control my habbits\",\"index\":\"9080093a-763d-4d21-90db-adee2d67a6dd\"}]",
      "feelings": "[{\"type\":\"Pleasure\",\"color\":\"#e84daf\",\"id\":\"fa5fd25d-0776-44b5-90aa-5a82b2aedf79\"}]",
      "id": "ed2b5148-97e4-4b39-8396-e38b8dc1ef9f",
      "user_email": "admin"
    }
  ]
