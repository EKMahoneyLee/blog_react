import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route , Switch} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticlesListPage from './pages/ArticlesListPage.js';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          {/* 모든 페이지에 디스플레이 하기위해 여기에 삽입 */}
          <NavBar />
          <div id="page-body">
            {/* make sure only render one.*/}
            <Switch>
              <Route path='/' component={ HomePage } exact/>
              <Route path='/about' component={ AboutPage } />
              <Route path='/articles-list' component={ ArticlesListPage } />
              <Route path='/:name' component={ ArticlePage } />
              <Route component ={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;