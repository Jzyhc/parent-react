/*
 * @Author       : jincheng
 * @Date         : 2020-12-24 14:47:54
 * @LastEditTime : 2020-12-26 15:22:51
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/router/index.js
 */
import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import TrafficOrder from '../pages/Hocpage';

const routePaths = [
  {
    path: '/app/micro/details/traffic/order',
    component: TrafficOrder,
    key: '/traffic/order'
  }
];

export default withRouter(() => (
  <Fragment>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/micro/details/traffic/order" />}
      />
      {routePaths.map(({ path, component, key }) => (
        <Route key={key} path={path} component={component} />
      ))}
    </Switch>
  </Fragment>
));
