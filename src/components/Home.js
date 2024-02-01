import React from 'react'
import Blogs from './Blogs'
import { useState } from 'react'
function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'Site building!', body: 'lorem ipsum...', author: 'Yuxin', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Is it done?', body: 'lorem ipsum...', author: 'Yuxin', id: 3 }
      ]);
    const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog)=>{return blog.id !== id}))
    }
  return (
    <div className='home'>
      <h1>Welcome to Dlog</h1>
      <h3 className='secondary-header'> All blogs:</h3>
      <Blogs blogs = {blogs} deleteBlog = {deleteBlog}/>
      <div className="divider"></div>
      <h3 className='secondary-header'> Blogs by yuxin:</h3>
      <Blogs blogs = {blogs.filter((blog)=> {return blog.author=== "Yuxin"})} deleteBlog = {deleteBlog}/>
    </div>
  )
}

export default Home
