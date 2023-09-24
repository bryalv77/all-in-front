import list from 'src/modules/businessCategory/list/businessCategoryListReducers';
import form from 'src/modules/businessCategory/form/businessCategoryFormReducers';
import view from 'src/modules/businessCategory/view/businessCategoryViewReducers';
import destroy from 'src/modules/businessCategory/destroy/businessCategoryDestroyReducers';
import importerReducer from 'src/modules/businessCategory/importer/businessCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
