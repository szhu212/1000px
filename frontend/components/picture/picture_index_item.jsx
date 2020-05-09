import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';



class PictureIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const pictureId = this.props.picture.id;
        this.props.history.push(`/pictures/${pictureId}`);
    }
    
    render(){
        // debugger
        const { picture } = this.props

        return(
           <div className="picture-item"
           onClick={this.handleClick}>
                 <img className="picture-img" src={picture.photoUrl}></img>
           </div>
        )
    }
}

export default withRouter(PictureIndexItem);
