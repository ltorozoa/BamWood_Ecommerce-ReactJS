
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer/HomeContainer.jsx";


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route>
            <header className="App-header">
              <HomeContainer />
            </header>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;
