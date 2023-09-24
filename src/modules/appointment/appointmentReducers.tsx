import list from '../../../modules/appointment/list/appointmentListReducers';
import form from '../../../modules/appointment/form/appointmentFormReducers';
import view from '../../../modules/appointment/view/appointmentViewReducers';
import destroy from '../../../modules/appointment/destroy/appointmentDestroyReducers';
import importerReducer from '../../../modules/appointment/importer/appointmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
