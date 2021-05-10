import Header from './header/Header';
import { StyledButton } from './syledComponents.styles';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="header-section">
        <Header />
      </section>
      <section className="left-section">
        <StyledButton>
          <div id="translate"></div>
            <h2 className="link" id="addListButton">About</h2>
        </StyledButton>
      </section>
      <section className="right-section">
        <StyledButton>
          <div id="translate"></div>
            <h2 className="link" id="addListButton">Contact</h2>
        </StyledButton>
      </section>
      <section className="middle-section">
        <StyledButton>
          <div id="translate"></div>
            <h2 className="link" id="addListButton">Projects</h2>
        </StyledButton>
      </section>
    </div>
  );
}

export default App;
