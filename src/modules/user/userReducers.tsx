import list from '../../../modules/user/list/userListReducers';
import form from '../../../modules/user/form/userFormReducers';
import view from '../../../modules/user/view/userViewReducers';
import importerReducer from '../../../modules/user/importer/userImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  importer: importerReducer,
});
