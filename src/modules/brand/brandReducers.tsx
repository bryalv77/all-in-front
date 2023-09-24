import list from '../../modules/brand/list/brandListReducers';
import form from '../../modules/brand/form/brandFormReducers';
import view from '../../modules/brand/view/brandViewReducers';
import destroy from '../../modules/brand/destroy/brandDestroyReducers';
import importerReducer from '../../modules/brand/importer/brandImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
