import list from '../../../modules/teacher/list/teacherListReducers';
import form from '../../../modules/teacher/form/teacherFormReducers';
import view from '../../../modules/teacher/view/teacherViewReducers';
import destroy from '../../../modules/teacher/destroy/teacherDestroyReducers';
import importerReducer from '../../../modules/teacher/importer/teacherImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
