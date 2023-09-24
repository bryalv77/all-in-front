import list from 'src/modules/paymentMethods/list/paymentMethodsListReducers';
import form from 'src/modules/paymentMethods/form/paymentMethodsFormReducers';
import view from 'src/modules/paymentMethods/view/paymentMethodsViewReducers';
import destroy from 'src/modules/paymentMethods/destroy/paymentMethodsDestroyReducers';
import importerReducer from 'src/modules/paymentMethods/importer/paymentMethodsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
