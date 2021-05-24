import Logo from '../logo/Logo.js'
import "./Header.css"
import {Route, Switch, Link} from 'react-router-dom';
import { StyledButton } from '../styledComponents.styles';


function Header() {
  return(
    <section className="header-section">
      <h1 className="name">Eric Berglund</h1>
      <h2 className="title">Frontend Software Engineer</h2>
      <section className="buttons">
            <section className="middle-section">
              <Link to={"/contact"}>
                <StyledButton>
                  <div id="translate"></div>
                    <h2 className="link" id="addListButton">Contact</h2>
                </StyledButton>
              </Link>
            </section>

            <section className="right-section">
              <Link to={"/projects"}>
                <StyledButton>
                  <div id="translate"></div>
                    <h2 className="link" id="addListButton">Projects</h2>
                </StyledButton>
              </Link> 
            </section>
          </section>
    </section>
  ) 
} 

export default Header;