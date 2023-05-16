// Lazy Loading used to increase the loading speed of application with dynamic importing concept.

import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
