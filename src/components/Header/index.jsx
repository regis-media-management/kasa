import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa" className="header__logo__main_logo" />
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__nav__nav_element">
          Accueil
        </Link>
        <Link to="/a-propos" className="header__nav__nav_element">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
