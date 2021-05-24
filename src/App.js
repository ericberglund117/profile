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
        <Link to={`/`}>
          <img className="eb-logo" src="https://fontmeme.com/permalink/210505/81d25d957f62d7bbd5b434142331e1f7.png" alt="initial logo" />
        </Link>
        <Header />
      </section>

        <Route exact path="/">
         {/* <MainPage /> */}
         {/* <Design /> */}
        </Route>

        <section className="page">
          <About />
        </section>
    </div>
  );
}

export default App;
