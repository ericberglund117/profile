import Header from './header/Header';
import { StyledButton } from './syledComponents.styles';
import './App.css';
import MainPage from './mainPage/MainPage';
import About from './about/About';
import {Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <section className="header-section">
        <Link to={`/`}>
          <img className="eb-logo" src="https://fontmeme.com/permalink/210505/81d25d957f62d7bbd5b434142331e1f7.png" alt="initial logo" />
        </Link>
        <Header />
      </section>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/">
         <MainPage />
        </Route>

        <section className="left-section">
          <Link to={"/about"}>
            <StyledButton>
              <div id="translate"></div>
                <h2 className="link" id="addListButton">About</h2>
            </StyledButton>
          </Link>
        </section>

        <section className="right-section">
          <Link to={"/contact"}>
            <StyledButton>
              <div id="translate"></div>
                <h2 className="link" id="addListButton">Contact</h2>
            </StyledButton>
          </Link>
        </section>

        <section className="middle-section">
          <Link to={"/projects"}>
            <StyledButton>
              <div id="translate"></div>
                <h2 className="link" id="addListButton">Projects</h2>
            </StyledButton>
          </Link> 
        </section>
    </div>
  );
}

export default App;
