import Header from './header/Header';
import { StyledButton } from './styledComponents.styles';
import './App.css';
import MainPage from './mainPage/MainPage';
import Design from './design/Design';
import About from './about/About';
import {Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <section className="main-header-section">
        <Header />
      </section>

        <Route exact path="/">
        </Route>

        <section className="page">
          <About />
          <section className="currently">
            <h1 className="currently-title">Currently:</h1>
            <section className="listening">
              <p className="listening-title"> Listening to: </p>
              <body className="spotify">
              <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E8LtVa53fIPXh" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </body>
            </section>
          </section>
        </section>

    </div>
  );
}

export default App;
