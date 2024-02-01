import {useState} from 'react'
/* redirect to / after adding post */
import { useNavigate } from 'react-router-dom';

function AddBlog({addBlog}) {
    
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const navigate = useNavigate();
    const onSubmit= (event) => {
        event.preventDefault();
        /* At this moment id is mocked using a random number */
        const id = Math.floor(Math.random()*1000000+1000);
        const blog = {title, body: post, author, id};
        addBlog(blog);
        setAuthor("");
        setTitle("");
        setPost("");
        navigate('/');
    }
    return (
    <div className='add-blog'>
      <h1>Add new blog</h1>
      <div className="row">
        <form className="col s12" onSubmit={(event)=>{onSubmit(event)}}>
            <div className="row">
                <div className="input-field col s6">
                    <input id="author" type="text" className="validate" onChange={(event)=>{setAuthor(event.target.value)}} value={author}/>
                    <label htmlFor="author">Name to display</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="title" type="text" className="validate" onChange={(event)=>{setTitle(event.target.value)}} value={title}/>
                    <label htmlFor="title">Title</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="post" className="materialize-textarea" onChange={(event)=>{setPost(event.target.value)}} value={post}></textarea>
                    <label htmlFor="post">Your post</label>
                </div>
            </div>
            <button className='btn' type='submit'>Submit post</button>
        </form>
    </div>
  </div>
      
  )
}

export default AddBlog
