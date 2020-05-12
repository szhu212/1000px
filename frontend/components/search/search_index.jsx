import React from 'react';
import PictureIndexItem from '../picture/picture_index_item';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: this.props.match.params.searchKey
        }
    }

    componentDidMount() {
        this.props.submitSearch(this.props.searchKey)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.searchKey !== this.props.match.params.search || prevProps.searchKey !== this.props.searchKey)
        this.props.submitSearch(this.props.searchKey)
        // this.props.clearSearch()
 
    }


    render() {
        // debugger
        const display = this.props.searchedPictures.map (picture => 
            <PictureIndexItem 
                picture = {picture} 
                key = {picture.id} />
                )
                // this.props.clearSearch()
        return (
            <div className="search-index-page">
                <h2>Search Result</h2>
                {display}
            </div>

        )

    }

}

export default SearchIndex;