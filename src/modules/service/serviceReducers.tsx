import list from '../../modules/service/list/serviceListReducers';
import form from '../../modules/service/form/serviceFormReducers';
import view from '../../modules/service/view/serviceViewReducers';
import destroy from '../../modules/service/destroy/serviceDestroyReducers';
import importerReducer from '../../modules/service/importer/serviceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
