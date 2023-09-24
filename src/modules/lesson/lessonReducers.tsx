import list from '../../../modules/lesson/list/lessonListReducers';
import form from '../../../modules/lesson/form/lessonFormReducers';
import view from '../../../modules/lesson/view/lessonViewReducers';
import destroy from '../../../modules/lesson/destroy/lessonDestroyReducers';
import importerReducer from '../../../modules/lesson/importer/lessonImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
