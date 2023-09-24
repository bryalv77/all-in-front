import list from '../../modules/orderDetail/list/orderDetailListReducers';
import form from '../../modules/orderDetail/form/orderDetailFormReducers';
import view from '../../modules/orderDetail/view/orderDetailViewReducers';
import destroy from '../../modules/orderDetail/destroy/orderDetailDestroyReducers';
import importerReducer from '../../modules/orderDetail/importer/orderDetailImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
