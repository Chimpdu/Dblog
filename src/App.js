import './App.css';
import './components/Nav'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import AddBlog from './components/AddBlog';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([
    { title: 'Site building!', body: 'lorem ipsum...', author: 'Yuxin', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Is it done?', body: 'lorem ipsum...', author: 'Yuxin', id: 3 }
  ]);
const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog)=>{return blog.id !== id}))
}
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home blogs={blogs} deleteBlog={deleteBlog}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path ='/add' element={<AddBlog/>}></Route>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
