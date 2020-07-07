import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          {
            //Switch makes it so that only the FIRST matching route will be shown. For example, in here, both streamCreate and StreamShow components will match the same path, switch will prevent both of them from showing}
          }
          <Switch>
            <Route path="/streams/new" exact component={StreamCreate} />

            <Route path="/" exact component={StreamList} />

            <Route path="/streams/edit/:id" exact component={StreamEdit} />

            <Route path="/streams/delete/:id" exact component={StreamDelete} />

            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
