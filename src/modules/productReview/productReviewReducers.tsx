import list from 'src/modules/productReview/list/productReviewListReducers';
import form from 'src/modules/productReview/form/productReviewFormReducers';
import view from 'src/modules/productReview/view/productReviewViewReducers';
import destroy from 'src/modules/productReview/destroy/productReviewDestroyReducers';
import importerReducer from 'src/modules/productReview/importer/productReviewImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
