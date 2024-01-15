import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

function Blog({ blog , handleAddToBMs, handleReadingTime}) {
    const {id, author, cover, author_img, posted_date, title, hashtags, reading_time } = blog

    return (
        <div className="my-8">
            {/*Title */}
            <h3 className="text-3xl  font-bold mb-5">{title}</h3>
            {/*Cover */}
            <div className="">
                <img src={cover} alt=""  className='w-full'/>
                {/*author info*/}
                <div className='flex justify-between'>
                    <div className="flex gap-4 my-5">
                        <img src={author_img} alt="" className="w-12 h-12" />
                        <div>
                            <p className="font-semibold">{author}</p>
                            <p className="font-light text-sm">{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=> handleAddToBMs(blog)}><FaBookmark></FaBookmark></button>
                    </div>

                </div>

                {/* hash tags */}
                <p className='text-[#11111199]'>{hashtags.map(( hash, idx) => <span key={idx}><a href="http://">#{hash}</a>  </span>)}</p>


            </div>
            <button className='text-purple-800 underline my-3 font-semibold' onClick={() => handleReadingTime(id, reading_time)}>Mark as read</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBMs : PropTypes.object.isRequired,
    handleReadingTime : PropTypes.object.isRequired
}

export default Blog
