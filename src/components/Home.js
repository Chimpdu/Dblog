import React from 'react'
import Blogs from './Blogs'
function Home({blogs, deleteBlog, updateLikes}) {
    
  return (
    <div className='home'>
      <h1>Welcome to Dlog</h1>
      <h3 className='secondary-header'> All blogs:</h3>
      <Blogs blogs = {blogs} deleteBlog = {deleteBlog} updateLikes={updateLikes}/>
      <div className="divider"></div>
      <h3 className='secondary-header'> Blogs by yuxin:</h3>
      <Blogs blogs = {blogs.filter((blog)=> {return blog.author=== "Yuxin"})} deleteBlog = {deleteBlog} updateLikes={updateLikes}/>
    </div>
  )
}

export default Home
