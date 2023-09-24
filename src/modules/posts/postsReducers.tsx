import list from 'src/modules/posts/list/postsListReducers';
import form from 'src/modules/posts/form/postsFormReducers';
import view from 'src/modules/posts/view/postsViewReducers';
import destroy from 'src/modules/posts/destroy/postsDestroyReducers';
import importerReducer from 'src/modules/posts/importer/postsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
