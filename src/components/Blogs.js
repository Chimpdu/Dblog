import React, { useState } from 'react';

function Blogs({ blogs, deleteBlog }) {
    const [hoveredBlogId, setHoveredBlogId] = useState(null);

    const onMouseOver = (id) => {
        setHoveredBlogId(id);
    };

    const onMouseLeave = () => {
        setHoveredBlogId(null);
    };

    return (
        <div className='blogs'>
            {blogs.map((blog) => (
                <div 
                    className="blog-card" 
                    key={blog.id} 
                    onMouseOver={() => onMouseOver(blog.id)} 
                    onMouseLeave={onMouseLeave}
                >
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                    {hoveredBlogId === blog.id && (
                        <button 
                            className='waves-effect waves-light btn blog-del-btn' 
                            onClick={() => deleteBlog(blog.id)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Blogs;
