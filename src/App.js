import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { StoreProvider } from './store';
import Home from './pages/Home';
import Cook from './pages/Cook';
import HowToCook from './pages/HowToCook'
import News from './pages/News';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ShoppingGuide from './pages/ShoppingGuide';
import PackageSubmission from './pages/PackageSubmission';
import KagiInfo from './pages/KagiInfo';
import Register from './pages/Register';
import Profile from './pages/Profile';
// import Recipe from './pages/Recipe';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/cook" component={Cook} />
          <Route path="/cook/:chosenRecipe" component={HowToCook} />
          <Route path="/news" component={News} />
          <Route path="/shoppingguide" component={ShoppingGuide} />
          <Route path="/packagesubmission" component={PackageSubmission} />
          <Route path="/kagiinfo" component={KagiInfo} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
