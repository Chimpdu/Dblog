import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css';
//npm i materialize-css@next is needed as we need to initialize the sidenav.
function Nav() {
  useEffect(()=>{
    // Initialize the sidenav
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }, [])
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Dlog</Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add blog</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </>
  )
}

export default Nav


