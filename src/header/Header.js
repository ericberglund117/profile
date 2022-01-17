import Logo from '../logo/Logo.js'
import "./Header.css"
import Contact from '../contact/Contact';
import {Route, Switch, Link} from 'react-router-dom';
import { StyledButton } from '../styledComponents.styles';


function Header() {
  
  const displayContact = (name) => {
    return (
      <Contact />
    )
  };

  return(
    <section className="header-section">
      {/* <Link to={`/`}>
          <img className="eb-logo" src="https://fontmeme.com/permalink/210505/81d25d957f62d7bbd5b434142331e1f7.png" alt="initial logo" />
        </Link> */}

      {/* <section className="introduction">
        <h1 className="intro">Hi, I'm</h1>
        <h2 className="name">Eric Berglund</h2>
      </section> */}
      {/* <h2 className="frontend">And I'm a Frontend Software Engineer</h2> */}
      

      <section className="buttons">
        <Link to={"/contact"}>
          <StyledButton onClick={event => displayContact}>
            <div id="translate"></div>
              <h2 className="link" id="addListButton">Contact</h2>
          </StyledButton>
        </Link>

        <Link to={"/projects"}>
          <StyledButton>
            <div id="translate"></div>
              <h2 className="link" id="addListButton">Projects</h2>
          </StyledButton>
        </Link> 

        <Link to={"/resume"}>
          <StyledButton>
            <div id="translate"></div>
              <h2 className="link" id="addListButton">Resume</h2>
          </StyledButton>
        </Link>
        <a href="https://medium.com/@ericberglund117">
          <StyledButton>
            <div id="translate"></div>
              <h2 className="link" id="addListButton">Blog</h2>
          </StyledButton>
        </a>
      </section>
    </section>
  ) 
} 

export default Header;