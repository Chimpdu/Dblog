import './App.css';
import './components/Nav'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import AddBlog from './components/AddBlog';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import { Suspense } from 'react';

function App() {
  const [blogs, setBlogs] = useState([
    { title: 'Site building!', body: 'lorem ipsum...', author: 'Yuxin', id: 1, likes: 0},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2, likes: 0 },
    { title: 'Is it done?', body: 'lorem ipsum...', author: 'Yuxin', id: 3, likes: 0 }
  ]);

const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog)=>{return blog.id !== id}))
}
const addBlog = (blog) => {
  setBlogs([...blogs, blog]);
}
const updateLikes = (blog) => {
  blogs.forEach((element) => {
    if (element.id === blog.id) {
      element.likes = blog.likes;
    }
  });
}

  return (
    <LanguageProvider>
      <Suspense fallback="loading">
        <Router>
          <div className="App">
            <Nav/>
            <Routes>
              <Route path='/' element={<Home blogs={blogs} deleteBlog={deleteBlog} updateLikes={updateLikes}/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path ='/add' element={<AddBlog addBlog={addBlog}/>}></Route>
            </Routes> 
          </div>
        </Router>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
