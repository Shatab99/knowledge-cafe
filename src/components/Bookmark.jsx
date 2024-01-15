import PropTypes from 'prop-types';


function Bookmark({bookmark}) {
    const {title} = bookmark
  return (
    <ul className=' w-'>
            <li className='text-sm font-semibold my-5 border bg-slate-200 py-2 px-5 rounded-xl '>{title}</li>
    </ul>
  )
}

Bookmark.propTypes ={
    bookmark:PropTypes.object
}

export default Bookmark
