

function Blog({ blog }) {
    const { author, cover, author_img, posted_date, title } = blog

    return (
        <div className="my-8">
            {/*Title */}
            <h3 className="text-3xl  font-bold mb-5">{title}</h3>
            {/*Cover */}
            <div className="">
                <img src={cover} alt="" />
                {/*author info*/}
                <div className="flex gap-4 my-5">
                    <img src={author_img} alt="" className="w-12 h-12" />
                    <div>
                        <p className="font-semibold">{author}</p>
                        <p className="font-light text-sm">{posted_date}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Blog
