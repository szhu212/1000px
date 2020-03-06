import React from 'react';
import NavBarContainer from'./nav_bar/nav_bar_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NotFoundForm from'./not_found_form';
import Homepage from'./homepage/homepage';

const App = () => (
    <div>
        <header>
        <NavBarContainer />
        </header>
        
        <Switch >
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={Homepage} />
            <Route path="*" component={NotFoundForm} />
        </Switch>

    </div>
)

export default App;