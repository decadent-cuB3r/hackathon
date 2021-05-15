import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { StoreProvider } from './store';
import Home from './pages/Home';
import Cook from './pages/Cook';
import News from './pages/News';
import Login from './pages/Login';
import ShoppingGuide from './pages/ShoppingGuide';
import PackageSubmission from './pages/PackageSubmission';
import KagiInfo from './pages/KagiInfo';
import Recipe from './pages/Recipe';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cook" component={Cook} />
          <Route path="/detail/:recipeId" component={Recipe} />
          <Route path="/news" component={News} />
          <Route path="/shoppingguide" component={ShoppingGuide} />
          <Route path="/packagesubmission" component={PackageSubmission} />
          <Route path="/kagiinfo" component={KagiInfo} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
