import { connect } from 'react-redux';

import { selectCategories } from 'client/selectors';
import { categoriesLoad } from 'client/actions';
import Categories from './Categories.jsx';

const mapStateToProps = state => ({
  categories: selectCategories(state)
});

const mapDispatchToProps = dispatch => ({
  categoriesLoad(categories) {
    dispatch(categoriesLoad(categories));
  },
  consoleErr(error) {
    dispatch(consoleErr(error));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
