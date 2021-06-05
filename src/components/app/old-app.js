import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ThemeContextProvider from "../../API/context";
import Home from '../home/Home'
import Contact from "../contact/contact";
import {BlogPage} from "../blog/blog-container";
import Checkout from "../checkout/checkout";
import Services from "../services/Services";
import Navbar from '../navbar/Navbar';

export default function App() {


  return (
    <>
      {
        <Router>
          <ThemeContextProvider>
            <main className="App">
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/checkout" component={Checkout}/>
              </Switch>
            </main>
          </ThemeContextProvider>
        </Router>
      }
    </>
  );
}
