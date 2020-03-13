import React from 'react';
import PictureIndexItem from './picture_index_item';

class PictureDiscover extends React.Component  {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchPictures()
    }

    render() {
        const pictures = this.props.pictures ? (this.props.pictures) : null
        // const filtered_pictures = this.props.pictures ? pictures.sort((a,b)=> a.created_at - b.created_at) : null
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
            <div className="discover-page-container">
                <div className="discover-text-container">
                   <div className="background-img-holder"></div>
                   <h2>Discover</h2>
                   <p>Discover fresh inspiration daily. </p>
                </div>
                <div className="picture-index-container">
                    {display}
                </div>
            </div>
        )
    }
}

export default PictureDiscover;