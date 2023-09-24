import list from 'src/modules/availabilityTimeslot/list/availabilityTimeslotListReducers';
import form from 'src/modules/availabilityTimeslot/form/availabilityTimeslotFormReducers';
import view from 'src/modules/availabilityTimeslot/view/availabilityTimeslotViewReducers';
import destroy from 'src/modules/availabilityTimeslot/destroy/availabilityTimeslotDestroyReducers';
import importerReducer from 'src/modules/availabilityTimeslot/importer/availabilityTimeslotImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
