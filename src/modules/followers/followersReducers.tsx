import list from '../../../modules/followers/list/followersListReducers';
import form from '../../../modules/followers/form/followersFormReducers';
import view from '../../../modules/followers/view/followersViewReducers';
import destroy from '../../../modules/followers/destroy/followersDestroyReducers';
import importerReducer from '../../../modules/followers/importer/followersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
