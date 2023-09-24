import list from '../../modules/address/list/addressListReducers';
import form from '../../modules/address/form/addressFormReducers';
import view from '../../modules/address/view/addressViewReducers';
import destroy from '../../modules/address/destroy/addressDestroyReducers';
import importerReducer from '../../modules/address/importer/addressImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
