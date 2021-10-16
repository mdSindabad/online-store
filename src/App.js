import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/AuthProvider";
import ProductsProvider from "./contexts/ProductsProvider";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <PrivateRoute path='/login'>
                <Login />
              </PrivateRoute>
              <Route path='/details/:productId'>
                <ProductDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
