import React from 'react';
import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component  {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        // debugger
        this.props.fetchPictures()
        // debugger
    }

    render() {
        // const {pictures} = this.props
        const pictures = this.props.pictures ? (this.props.pictures) : null
        // const pictures = Object.keys(this.props.pictures).length >0 ? (this.props.pictures) : null
        // debugger
        const display = Object.keys(pictures).length > 0 ? (
            <div className="picture-index">
                 
                    {pictures.map(picture => (
                         <PictureIndexItem 
                            picture = {picture}
                            key = {picture.id} 
                        />
                    ))}
                
            </div>
        ) 
        : (null)
        return (
            <div className="picture-index-container">
                {display}
            </div>
        )
    }
}

export default PictureIndex;