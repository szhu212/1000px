import React from 'react';
import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component  {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPictures()
    }

    render() {
        const pictures = this.props.pictures ? (this.props.pictures) : null

        // const filtered_pictures = this.props.pictures ? pictures.filter(picture=> picture.editors_choice === true) : null

        const filtered_pictures = this.props.pictures ? pictures : null
        const display = Object.keys(pictures).length > 0 ? (
            <div className="picture-index">
                    {filtered_pictures.map(picture => (
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