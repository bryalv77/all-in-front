import list from '../../modules/productReview/list/productReviewListReducers';
import form from '../../modules/productReview/form/productReviewFormReducers';
import view from '../../modules/productReview/view/productReviewViewReducers';
import destroy from '../../modules/productReview/destroy/productReviewDestroyReducers';
import importerReducer from '../../modules/productReview/importer/productReviewImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
