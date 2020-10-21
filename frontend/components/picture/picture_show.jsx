import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class PictureShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            likeButton:"",
            likeCount:0,
            likedImg: <i className="fas fa-heart fa-2x liked-icon"></i>,
            notLikedImg: <i className="far fa-heart fa-2x not-liked-icon"></i>,
            error:""
        };
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.getKeyByValue = this.getKeyByValue.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
 
    componentDidMount(){
        const picId = this.props.pictureId;
        this.props.fetchPicture(picId);
    }


    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.pictureId !== this.props.pictureId)
        {this.props.fetchPicture(this.props.pictureId)
        }
        if (Object.values(this.props.hashOfIds).length <= 1){
            this.props.fetchPictures()
        }
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    handleNextClick() {
        const picId = parseInt(this.props.pictureId);
        const hashOfIds = this.props.hashOfIds;
        const picIdx = this.getKeyByValue(hashOfIds, picId)
        let prevIdx = picIdx - 1
        let prevId = hashOfIds[prevIdx]
           if (prevIdx < 0) {
            this.props.history.push(`/pictures/${picId}`)
            this.setState({error:"This is the first illustration."})
        }
        else{
            this.props.history.push(`/pictures/${prevId}`);

        }
    }

    handlePrevClick(){
        const picId = parseInt(this.props.pictureId);
        const hashOfIds = this.props.hashOfIds;
        const picIdx = parseInt(this.getKeyByValue(hashOfIds, picId));
        let lastIdx = Object.values(hashOfIds).length - 1
        let nextIdx = picIdx + 1
        let nextId = hashOfIds[nextIdx]
        if (nextIdx > lastIdx) {
            this.props.history.push(`/pictures/${picId}`)
        }
        else{
            this.props.history.push(`/pictures/${nextId}`);
        }
    }

    handleLike(id){
        if (this.state.likeButton === this.state.likedImg ||( this.state.likeButton === "" && this.props.picture.likers && this.props.picture.likers.includes(this.props.currentUserId))){
            this.setState({likeButton: this.state.notLikedImg, likeCount: this.state.likeCount - 1})
            this.props.unlikePicture(id)
        } else {
            this.setState({likeButton: this.state.likedImg, likeCount: this.state.likeCount + 1}) 
            this.props.likePicture(id)
        }  
    }

    handleDelete(id){
        this.props.deletePicture(id)
        this.props.history.push(`/users/${this.props.currentUserId}`)
    }

    render(){
        // debugger
        const {picture, pictureId, editorsChoice, numLikes, userAvatar, authorName, authorId, currentUserId} = this.props
        const authorLink = authorId? `${authorId}` : null
        const avatarDisplay = userAvatar? <img src={userAvatar}/> : <img src={window.userpicURL} />
        let editors = "No"
        if (editorsChoice){editors = "Yes"}
        let likeIcon 
        if(this.state.likeButton===""){
            likeIcon= this.props.picture && this.props.picture.likers && this.props.picture.likers.includes(this.props.currentUserId)? 
            this.state.likedImg
             :
            this.state.notLikedImg
        } else {
            likeIcon = this.state.likeButton
        }
        let numLikesDisplay
        if(this.state.likeCount === ""){
            numLikesDisplay = numLikes
        } else {
            numLikesDisplay = parseInt(this.state.likeCount) + numLikes
        }
        let deleteButton = currentUserId && currentUserId === authorId?
         <button className="delete-button"
         > Delete </button> 
         : null

        
    return(

        <div className="picture-show-container">
            <div className="picture-container">
                <div className="prev-pic-container">
                     <img className="prev-pic-button" src={window.left_arrowURL} 
                      onClick={this.handlePrevClick}/>
                </div>
                
                <div className="individual-pic"> 
                    <img src={picture.photoUrl}></img>
                </div>
                <div className="next-pic-container">
                    <img className="next-pic-button" src={window.right_arrowURL}
                    onClick={this.handleNextClick}/>
                </div>
            </div>
           
            <div className="text-holder">
                <div className="text-box">
                     <div className="like-container" >
                         <div className="like-icon" onClick={()=>this.handleLike(pictureId)}>
                            {likeIcon} 
                         </div>
                        <div className="num-likes">
                             {numLikesDisplay}
                        </div>
                        <div className="delete-holder"
                        onClick={()=>this.handleDelete(pictureId)}>
                          {deleteButton}
                        </div>
                     </div>
                     <div className="title-and-author-info">
                         <div className="picture-title-and-author">
                            <div className="picture-title"> 
                                {picture.title}
                            </div>
                            <div className="author-box">
                                <span>by</span>
                                <span> {authorName}</span>
                            </div>
                         </div>
                         <div className="author-avatar">
                             <Link to={`/users/${authorLink}`}>
                                 {avatarDisplay}
                             </Link>
                         </div>

                     </div>
                    <div className="description-box">
                        <span>{picture.description}</span>
                    </div>
                    <div className="equip-and-editor-box">
                        <div className="equip-box">
                            <div className="brush-icon"></div>
                            <div className="equipment">
                                <span>{picture.equipment_or_material}</span>
                            </div>
                        </div>
                        <div className="editor-box">
                            <div className="editors-choice-icon"></div>
                            <div className="equipment">
                                <span>Editors' choice:</span>
                                <span>{editors}</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default withRouter(PictureShow);
