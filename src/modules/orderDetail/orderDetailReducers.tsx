import list from 'src/modules/orderDetail/list/orderDetailListReducers';
import form from 'src/modules/orderDetail/form/orderDetailFormReducers';
import view from 'src/modules/orderDetail/view/orderDetailViewReducers';
import destroy from 'src/modules/orderDetail/destroy/orderDetailDestroyReducers';
import importerReducer from 'src/modules/orderDetail/importer/orderDetailImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
