import React from 'react';
import PictureIndexItem from '../picture/picture_index_item';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: this.props.match.params.searchKey,
            error: ""
            
        }
    }

    componentDidMount() {
        this.props.submitSearch(this.props.searchKey)
        if(this.props.searchedPictures.length === 0) {
            this.setState({error: `We are sorry, there is no result matching ${this.props.searchKey}`})
        }
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.searchKey !== this.props.match.params.search || prevProps.searchKey !== this.props.searchKey)
        this.props.submitSearch(this.props.searchKey)
        // this.props.clearSearch()
 
    }


    render() {
        // debugger
        const { searchedPictures, searchKey } = this.props

        const display = searchedPictures.map (picture => 
            <PictureIndexItem 
                picture = {picture} 
                key = {picture.id} />
                )
        const numPics = searchedPictures.length 
        const errDisplay = numPics === 0 ? 
        <div className="error-display-container">
            <div className="search-icon">
                <i className="fas fa-search fa-lg fa-5x"></i>
                <h1>Oops!</h1>
            </div>
            <p>{`No result matching "${searchKey}"`}</p>
            <p>Please check the spelling or try modifying your search</p>
        </div>
         : null
        const searchMessage = numPics > 0 ? `${numPics} ${searchKey} illustrations` : null
        return (
            <div className="search-index-page">
                 {errDisplay} 
                <p className="search-message"> {searchMessage} </p>
                 <div className="search-result">
                    {display}
                 </div>
            </div>

        )

    }

}

export default SearchIndex;