
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'


function Bookmarks({bookmarks}) {
  console.log(bookmarks)
  
  return (
    <div className=' bg-gray-300 p-3 rounded-xl '>
      <div>
        <h1 className="md: text-2xl font-semibold">Bookmarks : {bookmarks.length}</h1>
        <p>
          {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          }
        </p>
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.object
}

export default Bookmarks
