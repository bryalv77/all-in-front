import list from '../../modules/tasks/list/tasksListReducers';
import form from '../../modules/tasks/form/tasksFormReducers';
import view from '../../modules/tasks/view/tasksViewReducers';
import destroy from '../../modules/tasks/destroy/tasksDestroyReducers';
import importerReducer from '../../modules/tasks/importer/tasksImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
