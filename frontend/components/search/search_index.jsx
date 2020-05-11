import React from 'react';
import PictureIndexItem from '../picture/picture_index_item';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.search(this.props.searchKey)
        // this.props.clearSearch()
    }


    render() {
        // debugger
        const display = this.props.pictures.map (picture => 
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