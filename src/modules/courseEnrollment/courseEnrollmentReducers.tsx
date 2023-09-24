import list from 'src/modules/courseEnrollment/list/courseEnrollmentListReducers';
import form from 'src/modules/courseEnrollment/form/courseEnrollmentFormReducers';
import view from 'src/modules/courseEnrollment/view/courseEnrollmentViewReducers';
import destroy from 'src/modules/courseEnrollment/destroy/courseEnrollmentDestroyReducers';
import importerReducer from 'src/modules/courseEnrollment/importer/courseEnrollmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
