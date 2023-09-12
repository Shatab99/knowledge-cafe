import { useEffect, useState } from "react"
import Blog from "./Blog"

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <p className="text-xl font-semibold mb-6"> Blogs : {blogs.length}</p>
            <div>
                {
                    blogs.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
                }
            </div>
        </div>
    )
}

export default Blogs
