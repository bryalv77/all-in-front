import list from 'src/modules/bank/list/bankListReducers';
import form from 'src/modules/bank/form/bankFormReducers';
import view from 'src/modules/bank/view/bankViewReducers';
import destroy from 'src/modules/bank/destroy/bankDestroyReducers';
import importerReducer from 'src/modules/bank/importer/bankImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
