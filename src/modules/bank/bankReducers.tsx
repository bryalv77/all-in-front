import list from '../../../modules/bank/list/bankListReducers';
import form from '../../../modules/bank/form/bankFormReducers';
import view from '../../../modules/bank/view/bankViewReducers';
import destroy from '../../../modules/bank/destroy/bankDestroyReducers';
import importerReducer from '../../../modules/bank/importer/bankImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
