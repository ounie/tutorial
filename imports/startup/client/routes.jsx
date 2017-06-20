import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Homepage from '/imports/ui/pages/Homepage.jsx';
import SecondPage from '/imports/ui/pages/SecondPage.jsx';

//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/second" component={SecondPage} />
  </Router>
);
