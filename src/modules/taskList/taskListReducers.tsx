import list from '../../../modules/taskList/list/taskListListReducers';
import form from '../../../modules/taskList/form/taskListFormReducers';
import view from '../../../modules/taskList/view/taskListViewReducers';
import destroy from '../../../modules/taskList/destroy/taskListDestroyReducers';
import importerReducer from '../../../modules/taskList/importer/taskListImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
