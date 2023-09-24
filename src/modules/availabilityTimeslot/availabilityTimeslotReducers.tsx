import list from '../../modules/availabilityTimeslot/list/availabilityTimeslotListReducers';
import form from '../../modules/availabilityTimeslot/form/availabilityTimeslotFormReducers';
import view from '../../modules/availabilityTimeslot/view/availabilityTimeslotViewReducers';
import destroy from '../../modules/availabilityTimeslot/destroy/availabilityTimeslotDestroyReducers';
import importerReducer from '../../modules/availabilityTimeslot/importer/availabilityTimeslotImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
