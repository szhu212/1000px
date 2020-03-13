import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class PictureShow extends React.Component {

    constructor(props){
        super(props);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        // this.state = {
        //     error: ""
        // };
    }
 
    componentDidMount(){
        const picId = this.props.pictureId;
        this.props.fetchPicture(picId);
    }


    componentDidUpdate(prevProps){
        if (prevProps.pictureId !== this.props.pictureId)
        {this.props.fetchPicture(this.props.pictureId)
        }
        if(Object.values(this.props.hashOfIds).length <= 1){
            this.props.fetchPictures()
        }
    }

    handlePrevClick() {
        const picId = this.props.pictureId;
        const hashOfIds = this.props.hashOfIds;
        const firstIdx = hashOfIds[0]
        let prevId = parseInt(picId) - 1
        if (prevId < firstIdx) {
            this.props.history.push(`/pictures/${picId}`)
            this.setState({error:"This is the first illustration."})
        }
        else{
            this.props.history.push(`/pictures/${prevId}`);

        }
        
    }

    handleNextClick(){
        const picId = this.props.pictureId;
        const hashOfIds = this.props.hashOfIds;
        const lastIdx = hashOfIds[Object.values(hashOfIds).length-1]
        let nextId = parseInt(picId) + 1
        if (nextId > lastIdx) {
            this.props.history.push(`/pictures/${picId}`)
        }
        else{
            this.props.history.push(`/pictures/${nextId}`);
        }
    }


    render(){
        const {picture, pictureId, editorsChoice} = this.props
        const authorName = this.props.picture? this.props.picture.authorName : null
        let editors = "No"
        if (editorsChoice){editors = "Yes"}
        // const displayError = this.state.error.length > 0 ? this.state.error : null
        
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
                <div className="lower-box">
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
    )
    }
}

export default withRouter(PictureShow);
