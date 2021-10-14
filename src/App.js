import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>{" "}
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="page-content">
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
