import React from 'react';
import { Link } from 'react-router-dom';

class SearchItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        // debugger
        const { title, photoUrl, authorName } = this.props.picture
        return (
            <div className="search-item">
                <li>
                    <Link to={`/pictures/${this.props.picture.id}`}>
                        <img src={photoUrl} className="search-item-img"/>
                        <span>{title}</span>
                        <span>by {authorName}</span>
                    </Link>
                </li>

            </div>
        )

    }

}

export default SearchItem;