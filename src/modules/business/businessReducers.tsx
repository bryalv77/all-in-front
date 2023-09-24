import list from '../../modules/business/list/businessListReducers';
import form from '../../modules/business/form/businessFormReducers';
import view from '../../modules/business/view/businessViewReducers';
import destroy from '../../modules/business/destroy/businessDestroyReducers';
import importerReducer from '../../modules/business/importer/businessImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
