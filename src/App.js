import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import BookListPage from './pages/bookListPage';
import BookFormPage from './pages/bookFormPage';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Books List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/books/new">Add Book</NavLink>
        </div>
        <Route exact path="/" component={BookListPage}/>
        <Route path="/books/new" component={BookFormPage}/>
        <Route path="/books/edit/:_id" component={BookFormPage}/>
      </Container>
    );
  }
}

export default App;
