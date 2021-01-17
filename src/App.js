import Header from './Components/Header/Header';
import Searcharea from './Components/Header/Searcharea/Searcharea';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Mainbody from './Components/Body/Mainbody';
import Detail from './Components/Body/Detail';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Header />
        <Searcharea/>
        <Switch>
          <Route exact path="/" component={Mainbody} />
          <Route path="/details" component={Detail} />
          <Redirect from='*' to='/' component={Detail} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
