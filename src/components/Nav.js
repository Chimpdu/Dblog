import React from 'react'

function Nav() {
  return (
    <nav className='navbar'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Dlog</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/#">mock</a></li>
          <li><a href="/#">mock</a></li>
        </ul>
      </div>
</nav>
  )
}

export default Nav


