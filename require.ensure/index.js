import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

require('./app.css');



// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Dashboard}/>
//       <Route path="app" component={Dashboard}/>
//       <Route path="inbox" component={Inbox}/>
//       <Route path="calendar" component={Calendar}/>
//       <Route path="*" component={Dashboard}/>
//     </Route>
//   </Router>
// ), document.querySelector('#app'));


var rootRoute = {
      path: '/',
      name: '首页',
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./app') })
        }, 'App')
      },
      childRoutes: [
      {
        path: 'dash',
        getComponent (nextState, cb) {
          require.ensure([], require => {
            cb(null, { component: require('./dashboard') })
          }, 'Dashboard')
        }
      }]
}

render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('example'))
