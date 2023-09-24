import list from 'src/modules/subTasks/list/subTasksListReducers';
import form from 'src/modules/subTasks/form/subTasksFormReducers';
import view from 'src/modules/subTasks/view/subTasksViewReducers';
import destroy from 'src/modules/subTasks/destroy/subTasksDestroyReducers';
import importerReducer from 'src/modules/subTasks/importer/subTasksImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
