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
          <h1 className="currently-title">Currently:</h1>
          <section className="currently">
            <section className="practicing">
              <p className="practicing-title"> Practicing: </p>
              <ul className="list"> 
                <li>Ruby</li>
                <li>Node.js</li>
              </ul>
            </section>
            <section className="listening">
              <p className="listening-title"> Listening to: </p>
              <body className="spotify">
              <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E8LtVa53fIPXh" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </body>
            </section>
            <section className="watching">
              <p className="watching-title"> Watching: </p>
              <p className="show"> The Office </p>
              <img className="office" src="https://www.tvinsider.com/wp-content/uploads/2020/12/the-office-key-art-nbc-peacock.jpg" alt="The office"></img>
            </section>
            <section className="reading">
              <p className="reading-title">Reading: </p>
              <p className="book">The Inner Circle by Brad Meltzer </p>
              <img className="inner-circle" src="https://images-na.ssl-images-amazon.com/images/I/51H9kUtjotL._SY291_BO1,204,203,200_QL40_ML2_.jpg" alt="The Inner Circle"></img>
            </section>
          </section>
        </section>

    </div>
  );
}

export default App;
