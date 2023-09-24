import list from 'src/modules/deliveryMethod/list/deliveryMethodListReducers';
import form from 'src/modules/deliveryMethod/form/deliveryMethodFormReducers';
import view from 'src/modules/deliveryMethod/view/deliveryMethodViewReducers';
import destroy from 'src/modules/deliveryMethod/destroy/deliveryMethodDestroyReducers';
import importerReducer from 'src/modules/deliveryMethod/importer/deliveryMethodImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
