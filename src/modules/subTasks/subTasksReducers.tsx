import list from '../../modules/subTasks/list/subTasksListReducers';
import form from '../../modules/subTasks/form/subTasksFormReducers';
import view from '../../modules/subTasks/view/subTasksViewReducers';
import destroy from '../../modules/subTasks/destroy/subTasksDestroyReducers';
import importerReducer from '../../modules/subTasks/importer/subTasksImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
