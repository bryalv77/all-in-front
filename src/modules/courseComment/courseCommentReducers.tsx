import list from 'src/modules/courseComment/list/courseCommentListReducers';
import form from 'src/modules/courseComment/form/courseCommentFormReducers';
import view from 'src/modules/courseComment/view/courseCommentViewReducers';
import destroy from 'src/modules/courseComment/destroy/courseCommentDestroyReducers';
import importerReducer from 'src/modules/courseComment/importer/courseCommentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
