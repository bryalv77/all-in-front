import list from '../../../modules/courseEnrollment/list/courseEnrollmentListReducers';
import form from '../../../modules/courseEnrollment/form/courseEnrollmentFormReducers';
import view from '../../../modules/courseEnrollment/view/courseEnrollmentViewReducers';
import destroy from '../../../modules/courseEnrollment/destroy/courseEnrollmentDestroyReducers';
import importerReducer from '../../../modules/courseEnrollment/importer/courseEnrollmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
