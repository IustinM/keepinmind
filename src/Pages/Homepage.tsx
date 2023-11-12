import { faBook, faCalendarDay, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import PageNavigation from '../components/Navigation/PageNavigation'
import Footer from '../components/utils/Footer'

const Homepage = () => {

  return (
    <div className='min-h-[100vh]'>
        <div className="flex items-center mx-auto w-[80%] min-h-[10vh] justify-between">
            <PageNavigation/>
            <div className="flex items-center">
                <p className='mr-[0.7rem]'>Already have an account?</p>
                <Link to='register'>
                    <div className="w-[120px] hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                        Sign in
                    </div>
                </Link>
            </div>
        </div>
        <div className="w-[80%] min-h-[80vh] flex mx-auto ">
            <div className="min-h-[70vh] flex flex-col justify-center">
                <h2 className='text-[2.2rem] my-[1.2rem]   '>Feel less stressful and <span className='text-default-red'>keep in mind</span> everything</h2>
                <p className='text-[1.2rem] w-[90%]'>If you are tired of doing something and forget most of that thing, then you are in the right place. KeepInMind is an application that will help you to keep up with every information you think is important for you. Reading a book, watching a movie or doing something in a day will be stored not in your brain but in your device's one. </p>
                <Link to='/register'>
                    <div className="w-[300px] mt-[2rem]">
                        <button   className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Register and try now the app</button>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col min-w-[400px] justify-center">
                <div className="flex justify-between w-full">
                <FontAwesomeIcon className='text-movie-green rotate-1 w-[120px] h-[120px]' icon={faBook}/>
                <FontAwesomeIcon className='text-movie-purple rotate-45 w-[120px] h-[120px]' icon={faVideo}/>
                </div>
                <div className="flex justify-center mt-6">
                    <FontAwesomeIcon className='text-sky-blue rotate-12 w-[120px] h-[120px]' icon={faCalendarDay}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage