import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext';
import Book from './utils/Book';
import NoBooks from './utils/NoBooks';

const Content:React.FC = () => {

  const {booksValue} = useContext(BookContext);
  
  return (
    <div>
        <h2 className="text-[3rem] w-[85%] mx-auto mt-[2rem]">Books</h2>
        <div className="">
          {
          booksValue.length > 0 ?
          booksValue.map((book:any,index:number)=>
            <Book key={index} book={book}/>
          )
          :
          <NoBooks/>
        }
        </div>
    </div>
  )
}

export default Content