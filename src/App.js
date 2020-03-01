import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {AnimatePresence } from "framer-motion"

import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

export default () =>
  <BrowserRouter>
  <Route
      render={props => (
      <AnimatePresence exitBeforeEnter>
        <Switch location={props.location} key={props.location.pathname}>
          <Route exact path="/about"><About {...props}/></Route>
          <Route exact path="/project"><Project {...props}/></Route>
          <Route exact path="/contact"><Contact {...props}/></Route>
          <Route path="/" ><Home {...{props,location:{...props.location, pathname:'/'}}}/></Route>
        </Switch>
      </AnimatePresence>
      )}/>
  </BrowserRouter>;
