import React from 'react'
function Blogs({blogs, deleteBlog}) {
    
    
    return (
    <div className='blogs'>
        {
            blogs.map((blog) => {return (
                <div className="blog-card" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
                <button className='waves-effect waves-light btn blog-del-btn' onClick={()=>{deleteBlog(blog.id)}}>Delete</button>
                </div>
      )})
    
        
    }
      
    </div>
  )
}

export default Blogs
