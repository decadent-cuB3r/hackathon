import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { StoreProvider } from './store';
import Home from './pages/Home';
import Cook from './pages/Cook';
import HowToCook from './pages/HowToCook'
import News from './pages/News';
import Login from './pages/Login';
import ShoppingGuide from './pages/ShoppingGuide';
import PackageSubmission from './pages/PackageSubmission';
import kagiInfo from './pages/KagiInfo';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cook" component={Cook} />
          <Route path="/cook/:chosenRecipe" component={HowToCook} />
          <Route path="/news" component={News} />
          <Route path="/shoppingguide" component={ShoppingGuide} />
          <Route path="/packagesubmission" component={PackageSubmission} />
          <Route path="/kagiinfo" component={kagiInfo} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
