import { connect } from 'react-redux';
import  {fetchPictures} from '../../actions/picture_actions';
import PictureDiscover from "../picture/picture_descover"

const mapStateToProps = (state, ownProps) => {
    return {
      pictures: Object.values(state.entities.pictures),
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PictureDiscover);