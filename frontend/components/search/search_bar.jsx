import React from 'react';
import SearchItem from './search_item'

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            search: ""
        }
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        e.preventDefault();
        let currentVal = e.currentTarget.value
        this.setState({ search: currentVal })
        if (currentVal !== ""){
            this.props.search(currentVal)
        }

    }

    render() {
        // debugger
        const searchResult = this.props.pictures.length > 0 ? this.props.pictures.map(picture=> 
            <SearchItem 
                picture = {picture}
                key = {picture.id} />
            ) : null
            // debugger
        return(
            <div className="search-container">
                <input type="text"
                    value={this.state.search}
                    onChange={this.handlechange}
                    placeholder="Search 1000Illusts"
                />
                <div className="search-result-list">
                    {searchResult}
                </div>
            </div>
        )
    }

}


export default SearchBar;
