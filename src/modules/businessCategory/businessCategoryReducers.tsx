import list from '../../modules/businessCategory/list/businessCategoryListReducers';
import form from '../../modules/businessCategory/form/businessCategoryFormReducers';
import view from '../../modules/businessCategory/view/businessCategoryViewReducers';
import destroy from '../../modules/businessCategory/destroy/businessCategoryDestroyReducers';
import importerReducer from '../../modules/businessCategory/importer/businessCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
