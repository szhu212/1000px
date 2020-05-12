import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { search, submitSearch, clearSearch } from '../../actions/search_action';
import SearchIndex from './search_index'

const mapStateToProps = (state, ownProps) => {
    // debugger
    let searchedPictures = Object.values(state.entities.pictures)

    return {
        searchKey: ownProps.match.params.search,
        searchedPictures,
    }

}

const mapDispatchToProps = (dispatch) => ({
    submitSearch: (searchInput) => dispatch(submitSearch(searchInput)),
    clearSearch: () => dispatch(clearSearch())
})

export default withRouter ( connect(mapStateToProps,mapDispatchToProps)(SearchIndex))