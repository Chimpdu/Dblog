import Blog from './Blog';

function Blogs({ blogs, deleteBlog, updateLikes}) {
    

    return (
        <div className='blogs'>
            {blogs.map((blog)=> {
                return (<Blog key={blog.id} blog={blog} deleteBlog={deleteBlog} updateLikes={updateLikes}/>)
            })}
           
        </div>
    );
}

export default Blogs;
