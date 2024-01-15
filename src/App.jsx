
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'
import ShowingTime from './components/ShowingTime'

function App() {

  const [bookmarks, setBookmarks]= useState([])
  const [readinTime , setReadingTime]= useState(0)

  function handleAddToBMs(blog){
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  function handleReadingTime (id,time){
   
    const newTime = time + readinTime;
    
    setReadingTime(newTime);
    // removing bookmarks 
    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !==id)
    setBookmarks(removeBookmarks)

  }

  return (
    <>
      <div className=''>
        <Header></Header>
        <div className='flex flex-col md:flex-row   max-w-6xl px-9 mx-auto gap-16'>
          <Blogs handleAddToBMs={handleAddToBMs} handleReadingTime={handleReadingTime}></Blogs>
          <div className='md:w-1/3 h-3/4'>
          <ShowingTime readinTime ={readinTime}></ShowingTime>
          <Bookmarks bookmarks ={bookmarks} ></Bookmarks>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
