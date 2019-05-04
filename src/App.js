import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Heading from './components/Heading';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import Result from './components/Result';
import SavedBooks from './components/SavedBooks';
import Book from './components/Book';



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Heading />
        <Switch>
          <Route exact path="/" component={SearchInput} />
          <Route exact path="/saved" component={SavedBooks} />
          {/* <SearchInput />
          <SearchResults>
            <Result />
          </SearchResults>
          <SavedBooks>
            <Book />
          </SavedBooks> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
