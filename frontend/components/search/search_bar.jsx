import React from 'react';
import SearchItem from './search_item';


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
        } else {
            this.props.clearSearch()
        }

    }

    handleClick() {
        this.setState({search: ""})
        this.props.clearSearch()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({search: ""})

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
                <div onClick={this.handleSubmit}>
                    Search
                </div >
                <div className="search-result-list" onClick={this.handleClick}>
                    {searchResult}
                </div>
            </div>
        )
    }

}


export default SearchBar;
