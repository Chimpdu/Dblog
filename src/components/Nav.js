import {useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';

//npm i materialize-css@next is needed as we need to initialize the sidenav.
function Nav() {
  const {t} = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);
  useEffect(()=>{
    // Initialize the sidenav
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }, [])

 
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <Link to="#" className="brand-logo">Dlog <span><img src="https://flagcdn.com/w80/gb.png" srcSet="https://flagcdn.com/w80/gb.png 2x" width="40" height="20" alt="United Kingdom" onClick={()=>{changeLanguage("en")}}/></span>   <span><img src="https://flagcdn.com/w40/fi.png" srcSet="https://flagcdn.com/w80/fi.png 2x" width="40" height="20" alt="Finland" onClick={()=>{changeLanguage("fi")}}/></span></Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">{t('Home')}</Link></li>
            <li><Link to="/add">{t('Add blog')}</Link></li>
            <li><Link to="/about">{t('About')}</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">{t('Home')}</Link></li>
        <li><Link to="/add">{t('Add blog')}</Link></li>
        <li><Link to="/about">{t('About')}</Link></li>
        <li><Link to="#"><img src="https://flagcdn.com/w80/gb.png" srcSet="https://flagcdn.com/w80/gb.png 2x" width="40" height="20" alt="United Kingdom" onClick={()=>{changeLanguage("en")}}/></Link></li>   
        <li><Link to="#"><img src="https://flagcdn.com/w40/fi.png" srcSet="https://flagcdn.com/w80/fi.png 2x" width="40" height="20" alt="Finland" onClick={()=>{changeLanguage("fi")}}/></Link></li>
      </ul>
    </>
  )
}


export default Nav;