import list from 'src/modules/courseTransaction/list/courseTransactionListReducers';
import form from 'src/modules/courseTransaction/form/courseTransactionFormReducers';
import view from 'src/modules/courseTransaction/view/courseTransactionViewReducers';
import destroy from 'src/modules/courseTransaction/destroy/courseTransactionDestroyReducers';
import importerReducer from 'src/modules/courseTransaction/importer/courseTransactionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
