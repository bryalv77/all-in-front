import list from 'src/modules/tasks/list/tasksListReducers';
import form from 'src/modules/tasks/form/tasksFormReducers';
import view from 'src/modules/tasks/view/tasksViewReducers';
import destroy from 'src/modules/tasks/destroy/tasksDestroyReducers';
import importerReducer from 'src/modules/tasks/importer/tasksImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
