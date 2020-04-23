import React from 'react';
import NavBarContainer from'./nav_bar/nav_bar_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotFoundForm from'./not_found_form';
import HomepageContainer from'./homepage/homepage_container';
import PictureShowContainer from '../components/picture/picture_show_container';
import PictureDiscoverContainer from './picture/picture_descover_container';
import CreatePictureFormContainer from './picture/create_picture_form_container';



const App = () => (
    <div>
        <header>
        <NavBarContainer />
        </header>

        <Switch >
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomepageContainer} />
            <Route exact path="/discover" component={PictureDiscoverContainer} />
            <Route exact path="/upload" component={CreatePictureFormContainer} />
            <Route path="/pictures/:pictureId" component={PictureShowContainer} />
            <Route path="*" component={NotFoundForm} />
        </Switch>

    </div>
)

export default App;