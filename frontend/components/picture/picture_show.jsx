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
            notLikedImg: <i className="far fa-heart fa-2x not-liked-icon"></i>
        };
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.getKeyByValue = this.getKeyByValue.bind(this)
        this.handleLike = this.handleLike.bind(this)
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
        // if ()
        // debugger
        // if(this.props.picture && this.props.picture.likers !== this.prevProps.picture.likers) {
        //     this.props.fetchPicture(this.props.pictureId)
        // }
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    handlePrevClick() {
        const picId = parseInt(this.props.pictureId);
        const hashOfIds = this.props.hashOfIds;
        // const firstIdx = hashOfIds[0]
        // let prevId = parseInt(picId) - 1
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
        // if (prevId < firstIdx) {
        //     this.props.history.push(`/pictures/${picId}`)
        //     this.setState({error:"This is the first illustration."})
        // }
        // else{
        //     this.props.history.push(`/pictures/${prevId}`);

        // }
        
    }

    handleNextClick(){
        const picId = parseInt(this.props.pictureId);
        const hashOfIds = this.props.hashOfIds;
        const picIdx = parseInt(this.getKeyByValue(hashOfIds, picId));
        // const lastIdx = hashOfIds[Object.values(hashOfIds).length-1]
        let lastIdx = Object.values(hashOfIds).length - 1
        // debugger
        // let nextId = parseInt(picId) + 1
        let nextIdx = picIdx + 1
        let nextId = hashOfIds[nextIdx]
        // debugger
        if (nextIdx > lastIdx) {
            this.props.history.push(`/pictures/${picId}`)
        }
        else{
            this.props.history.push(`/pictures/${nextId}`);
        }
        // if (nextId > lastIdx) {
        //     this.props.history.push(`/pictures/${picId}`)
        // }
        // else{
        //     this.props.history.push(`/pictures/${nextId}`);
        // }
    }

    handleLike(id){
        // debugger
        // if (this.state.updateLike==="0"){
        //     this.setState({updateLike: "1"})
        // } else {
        //     debugger
        //     this.setState({updateLike: "0"})
        // this.setState({updateLike : this.state.updateLike ? false: true})
        // debugger
        if (this.state.likeButton === this.state.likedImg ||( this.state.likeButton = "" && this.props.picture.likers && this.props.picture.likers.includes(this.props.currentUserId))){
            this.setState({likeButton: this.state.notLikedImg, likeCount: this.state.likeCount - 1})
            this.props.unlikePicture(id)
        } else {
            this.setState({likeButton: this.state.likedImg, likeCount: this.state.likeCount + 1}) 
            // debugger
            // let like = {like: {liker_id: this.props.currentUserId, picture_id: this.props.pictureId}}
            this.props.likePicture(id)
        }
       
    }

    render(){
        // debugger
        const {picture, pictureId, editorsChoice, numLikes} = this.props
        const authorName = this.props.picture? this.props.picture.authorName : null
        let editors = "No"
        if (editorsChoice){editors = "Yes"}
        // const displayError = this.state.error.length > 0 ? this.state.error : null
        // const numLikes = this.props.picture && this.props.picture.likers ? this.props.picture.likers.length : 0
        // this.setState({likes: numlikes})
        let likeIcon 
        if(this.state.likeButton===""){
            likeIcon= this.props.picture && this.props.picture.likers && this.props.picture.likers.includes(this.props.currentUserId)? 
            <i className="fas fa-heart fa-2x liked-icon"></i>
             :
            <i className="far fa-heart fa-2x not-liked-icon"></i>
        } else {
            likeIcon = this.state.likeButton
        }
        // this.setState({likeButton: likedIcon})
        let numLikesDisplay
        if(this.state.likeCount === ""){
            numLikesDisplay = numLikes
        } else {
            numLikesDisplay = parseInt(this.state.likeCount) + numLikes
        }

        
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
                     <div className="like-container" onClick={()=>this.handleLike(pictureId)}>
                         {likeIcon} 
                         {/* {this.state.likeButton} */}
                        <div className="num-likes">
                        {numLikesDisplay}
                        </div>
                     </div>
                    <div className="picture-title"> 
                        {picture.title}
                    </div>
                    <div className="author-box">
                        <span>by</span>
                        <span> {authorName}</span>
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
