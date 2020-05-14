import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from'./nav_bar/nav_bar_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotFoundForm from'./not_found_form';
import HomepageContainer from'./homepage/homepage_container';
import PictureShowContainer from '../components/picture/picture_show_container';
import PictureDiscoverContainer from './picture/picture_descover_container';
import UserProfileContainer from './profile/user_profile_container';
import SearchIndexContainer from './search/search_index_container'


const App = () => (
    <div>
        <Modal />
        <header>
        <NavBarContainer />
        </header>

        <Switch >
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomepageContainer} />
            <Route exact path="/discover" component={PictureDiscoverContainer} />
            <ProtectedRoute path="/pictures/:pictureId" component={PictureShowContainer} />
            <Route path="/users/:userId" component={UserProfileContainer} />
            <Route path="/search/:search" component={SearchIndexContainer} />
            <Route path="*" component={NotFoundForm} />
        </Switch>

    </div>
)

export default App;