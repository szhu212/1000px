import React from 'react';
import PictureIndexItem from '../picture/picture_index_item'
import { openModal } from '../../actions/modal_actions';

class UserProfile extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        // debugger
        if (this.props.userId) {
            this.props.fetchUser(this.props.userId)
            this.props.fetchUserPictures(this.props.userId)
        }
        // debugger
    }

    render() {
        // debugger
        const username = this.props.username ? this.props.username : null
        const pictures = this.props.userPictures ? this.props.userPictures : null
        const display = (pictures && Object.keys(pictures).length > 0)? (
            <div className="picture-index">
                    {pictures.map(picture => (
                         <PictureIndexItem 
                            picture = {picture}
                            key = {picture.id} 
                        />
                    ))}
            </div>
            ) 
            : null
       
        const profileUrl = this.props.avatarUrl? this.props.avatarUrl : window.userpicURL
        return(
            <div className="user-profile-page">
                <img src={profileUrl} 
                className="profile-img"
                onClick={()=>this.props.openModal('uploadAvatar')}/>
                <p className="username">{username}</p>
                <h2>Uploaded Illustrations</h2>
                {display}
            </div>
        )
    }
}

export default UserProfile;