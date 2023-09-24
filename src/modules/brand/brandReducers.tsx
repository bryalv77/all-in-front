import list from 'src/modules/brand/list/brandListReducers';
import form from 'src/modules/brand/form/brandFormReducers';
import view from 'src/modules/brand/view/brandViewReducers';
import destroy from 'src/modules/brand/destroy/brandDestroyReducers';
import importerReducer from 'src/modules/brand/importer/brandImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
