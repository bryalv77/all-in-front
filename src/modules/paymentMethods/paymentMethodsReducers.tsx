import list from '../../../modules/paymentMethods/list/paymentMethodsListReducers';
import form from '../../../modules/paymentMethods/form/paymentMethodsFormReducers';
import view from '../../../modules/paymentMethods/view/paymentMethodsViewReducers';
import destroy from '../../../modules/paymentMethods/destroy/paymentMethodsDestroyReducers';
import importerReducer from '../../../modules/paymentMethods/importer/paymentMethodsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
