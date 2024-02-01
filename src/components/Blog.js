import { useState } from 'react';

function Blog({blog, deleteBlog, updateLikes}) {
    const [hoveredBlogId, setHoveredBlogId] = useState(null);

    const onMouseOver = (id) => {
        setHoveredBlogId(id);
    };

    const onMouseLeave = () => {
        setHoveredBlogId(null);
    };
    
    const onClickLikeCounter = () => {
        const updatedLikes = blog.likes + 1; // Increment the likes for the current blog
        const updatedBlog = { ...blog, likes: updatedLikes }; 
        updateLikes(updatedBlog);
    }
    return (
        <div
                    className="blog-card" 
                    key={blog.id} 
                    onMouseOver={() => onMouseOver(blog.id)} 
                    onMouseLeave={onMouseLeave}
                >
            <button className='like-counter' onClick={onClickLikeCounter}> {blog.likes} ❤️</button>
            <h2>{blog.title}</h2>
            <p className='blog-body'>{blog.body}</p>
            <p className='blog-author'>{blog.author}</p>
            {hoveredBlogId === blog.id && (
            <button 
                        className='waves-effect waves-light btn blog-del-btn' 
                        onClick={() => deleteBlog(blog.id)}
                    >
                        Delete
                    </button>
            )}
        </div>
    
    )
}

export default Blog
