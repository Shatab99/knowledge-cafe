import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import Blog from "./Blog"

function Blogs({handleAddToBMs, handleReadingTime}) {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-3/4">
            <p className="text-xl font-semibold mb-6"> Blogs : {blogs.length}</p>
            <div>
                {
                    blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleAddToBMs={handleAddToBMs} handleReadingTime={handleReadingTime}></Blog>)
                }
            </div>
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBMs : PropTypes.object.func,
    handleReadingTime : PropTypes.object
}

export default Blogs
