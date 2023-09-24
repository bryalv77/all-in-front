import list from 'src/modules/followers/list/followersListReducers';
import form from 'src/modules/followers/form/followersFormReducers';
import view from 'src/modules/followers/view/followersViewReducers';
import destroy from 'src/modules/followers/destroy/followersDestroyReducers';
import importerReducer from 'src/modules/followers/importer/followersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
