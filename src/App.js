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
