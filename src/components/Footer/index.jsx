import logo from '../../assets/secondary_logo.svg'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Kasa" className="footer__logo__secondary_logo" />
      </div>
      <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
