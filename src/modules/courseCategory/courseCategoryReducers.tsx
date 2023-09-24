import list from 'src/modules/courseCategory/list/courseCategoryListReducers';
import form from 'src/modules/courseCategory/form/courseCategoryFormReducers';
import view from 'src/modules/courseCategory/view/courseCategoryViewReducers';
import destroy from 'src/modules/courseCategory/destroy/courseCategoryDestroyReducers';
import importerReducer from 'src/modules/courseCategory/importer/courseCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
