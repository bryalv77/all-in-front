import list from '../../../modules/student/list/studentListReducers';
import form from '../../../modules/student/form/studentFormReducers';
import view from '../../../modules/student/view/studentViewReducers';
import destroy from '../../../modules/student/destroy/studentDestroyReducers';
import importerReducer from '../../../modules/student/importer/studentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
