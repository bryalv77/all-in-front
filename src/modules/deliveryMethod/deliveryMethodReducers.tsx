import list from '../../../modules/deliveryMethod/list/deliveryMethodListReducers';
import form from '../../../modules/deliveryMethod/form/deliveryMethodFormReducers';
import view from '../../../modules/deliveryMethod/view/deliveryMethodViewReducers';
import destroy from '../../../modules/deliveryMethod/destroy/deliveryMethodDestroyReducers';
import importerReducer from '../../../modules/deliveryMethod/importer/deliveryMethodImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
