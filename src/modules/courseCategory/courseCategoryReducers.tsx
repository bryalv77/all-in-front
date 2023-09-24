import list from '../../../modules/courseCategory/list/courseCategoryListReducers';
import form from '../../../modules/courseCategory/form/courseCategoryFormReducers';
import view from '../../../modules/courseCategory/view/courseCategoryViewReducers';
import destroy from '../../../modules/courseCategory/destroy/courseCategoryDestroyReducers';
import importerReducer from '../../../modules/courseCategory/importer/courseCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
