import React from 'react';
import PictureIndexItem from '../picture/picture_index_item'
import { openModal } from '../../actions/modal_actions';

class UserProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userId: ""
        }
    }
    
    componentDidMount() {
        // debugger
        if (this.props.userId) {
            this.setState({userId: this.props.userId})
            this.props.fetchUser(this.props.userId)
            this.props.fetchUserPictures(this.props.userId)
        }
        // debugger
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.avatarUrl !== this.props.avatarUrl){
            this.props.fetchUser(prevProps.userId)
        }
        if(this.props.userPictures && this.props.userPictures[0].author_id !== this.props.userId){
            this.props.fetchUserPictures(this.props.userId)
        }
    
    }

    render() {
        // debugger
        const username = this.props.username ? this.props.username : null
        const pictures = this.props.userPictures ? this.props.userPictures : null
        const display = (pictures && Object.keys(pictures).length > 0)? (
            <div>
                <h2>Uploaded Illustrations</h2>
                <div className="picture-index">
                        {pictures.reverse().map(picture => (
                            <PictureIndexItem 
                                picture = {picture}
                                key = {picture.id} 
                            />
                        ))}
                </div>
            </div>
            ) 
            : null
       
        const profileUrl = this.props.avatarUrl? this.props.avatarUrl : window.userpicURL
        const userClick = this.props.userId === this.props.currentUesrId?  
            <img src={profileUrl} 
            className="profile-img current-user-profile"
            onClick={()=>this.props.openModal('uploadAvatar')}/> 
            :  <img src={profileUrl} 
            className="profile-img"/>

        return(
            <div className="user-profile-page">
                {userClick}
                <p className="username">{username}</p>
                
                {display}
            </div>
        )
    }
}

export default UserProfile;