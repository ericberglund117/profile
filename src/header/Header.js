import Logo from '../logo/Logo.js'
import "./Header.css"

function Header() {
  return(
    <section className="header-section">
      <section className="logo-section">
        <Logo />
      </section>
      <h1 className="name">Eric Berglund</h1>
      <h2 className="title">Frontend Software Engineer</h2>
    </section>
  ) 
} 

export default Header;