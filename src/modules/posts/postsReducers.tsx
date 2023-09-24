import list from '../../modules/posts/list/postsListReducers';
import form from '../../modules/posts/form/postsFormReducers';
import view from '../../modules/posts/view/postsViewReducers';
import destroy from '../../modules/posts/destroy/postsDestroyReducers';
import importerReducer from '../../modules/posts/importer/postsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
