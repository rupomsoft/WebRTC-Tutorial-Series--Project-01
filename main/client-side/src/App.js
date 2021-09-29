import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
class App extends Component {
  render() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/join" component={JoinPage}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
