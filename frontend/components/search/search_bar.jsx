import React from 'react';
import SearchItem from './search_item';
import SearchIndex from './search_index';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            search: ""
        }
        this.handlechange = this.handlechange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        // debugger
        const address = this.state.search
        // this.props.clearSearch()
        this.setState({search: ""}, () =>this.props.history.push(`/search/${address}`))
        // this.props.clearSearch()
        // debugger
        // this.props.history.push(`/search/${address}`)
        // const pictures = this.props.pictures
        // if (pictures.length>0) {
        //     <SearchIndex
        //         pictures = {pictures}
        //         />
        // }

    }

    render() {
        // debugger
        const searchResult = this.props.pictures.length > 0 && this.state.search !== "" ? 
        this.props.pictures.map(picture=> 
         
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
                <button onClick={this.handleSubmit}
                className="search-button">
                    <i className="fas fa-search fa-lg"></i>
                </button >
                <div className="search-result-list" onClick={this.handleClick}>
                    {searchResult}
                </div>
            </div>
        )
    }

}


export default SearchBar;
