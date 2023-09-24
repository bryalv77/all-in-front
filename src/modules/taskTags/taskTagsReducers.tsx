import list from 'src/modules/taskTags/list/taskTagsListReducers';
import form from 'src/modules/taskTags/form/taskTagsFormReducers';
import view from 'src/modules/taskTags/view/taskTagsViewReducers';
import destroy from 'src/modules/taskTags/destroy/taskTagsDestroyReducers';
import importerReducer from 'src/modules/taskTags/importer/taskTagsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
