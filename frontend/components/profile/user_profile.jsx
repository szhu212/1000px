import React from 'react';

class UserProfile extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        // debugger
        if (this.props.userId) {
            this.props.fetchUser(this.props.userId)
        }
        // debugger
    }

    render() {
        debugger
        const username = this.props.username ? this.props.username : null
        return(
            <div>
                <h1>Profile</h1>
                {username}
        
            </div>
        )
    }
}

export default UserProfile;