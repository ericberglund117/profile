import Header from './header/Header';
import { StyledButton } from './styledComponents.styles';
import './App.css';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import {Route, Switch, Link} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      {/* <section className='triangle'></section> */}
      <section className="main-header-section">
        <Header />
      </section>
      <Switch>
        <Route exact path="/">
          {/* <App /> */}
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        
        <Route path="/projects" component={Projects}>
          </Route>
        </Switch>
        <header>
        {/* <!-- First container --> */}
        <div class="container container_solid">
          <div class="title_wrapper">
            <h1>Frontend Software Developer</h1>
          </div>
        </div>

        {/* <!-- Second container --> */}
        <div class="container container_image" aria-hidden="true">
          <div class="title_wrapper">
            <h1>Frontend Software Developer</h1>
          </div>
        </div>

      </header>

      <section>
        <h2>Eric Berglund</h2>
        <About />
        {/* <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p> */}
      </section>
        {/* <section className="page">
          <section className="intro">
              <h1 className="dev">Frontend Software Developer</h1>
          </section> */}
          
          {/* <h1 className="currently-title">Currently:</h1>
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
          </section> */}
        {/* </section> */}
    </div>
  );
}

export default App;
