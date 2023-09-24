import list from '../../../modules/productCategory/list/productCategoryListReducers';
import form from '../../../modules/productCategory/form/productCategoryFormReducers';
import view from '../../../modules/productCategory/view/productCategoryViewReducers';
import destroy from '../../../modules/productCategory/destroy/productCategoryDestroyReducers';
import importerReducer from '../../../modules/productCategory/importer/productCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
