import list from '../../modules/taskTags/list/taskTagsListReducers';
import form from '../../modules/taskTags/form/taskTagsFormReducers';
import view from '../../modules/taskTags/view/taskTagsViewReducers';
import destroy from '../../modules/taskTags/destroy/taskTagsDestroyReducers';
import importerReducer from '../../modules/taskTags/importer/taskTagsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
