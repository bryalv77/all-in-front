import list from '../../../modules/courseComment/list/courseCommentListReducers';
import form from '../../../modules/courseComment/form/courseCommentFormReducers';
import view from '../../../modules/courseComment/view/courseCommentViewReducers';
import destroy from '../../../modules/courseComment/destroy/courseCommentDestroyReducers';
import importerReducer from '../../../modules/courseComment/importer/courseCommentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
