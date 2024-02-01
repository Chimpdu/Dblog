import './App.css';
import './components/Nav'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import AddBlog from './components/AddBlog';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path ='/add' element={<AddBlog/>}></Route>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
