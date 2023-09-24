import list from 'src/modules/lesson/list/lessonListReducers';
import form from 'src/modules/lesson/form/lessonFormReducers';
import view from 'src/modules/lesson/view/lessonViewReducers';
import destroy from 'src/modules/lesson/destroy/lessonDestroyReducers';
import importerReducer from 'src/modules/lesson/importer/lessonImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
