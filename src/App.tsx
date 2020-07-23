import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Toolbar from './components/toolbar';
import Home from './components/home';
import Product from './components/product';
import Info from './components/info';
import './App.scss';

const App: React.FC = () => {
  const headrButtons = ["Project Name", "Nickname", "Subproject"]
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <hr />
      <div className="MainView">
        <Toolbar buttons={headrButtons}></Toolbar>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route  path="/product:item" component={Product} />
            <Route path="/info" component={Info} />
          </Switch>
        </BrowserRouter>
      </div >
    </div>
  );
}

export default App;
