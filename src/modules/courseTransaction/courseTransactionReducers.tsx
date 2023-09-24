import list from '../../modules/courseTransaction/list/courseTransactionListReducers';
import form from '../../modules/courseTransaction/form/courseTransactionFormReducers';
import view from '../../modules/courseTransaction/view/courseTransactionViewReducers';
import destroy from '../../modules/courseTransaction/destroy/courseTransactionDestroyReducers';
import importerReducer from '../../modules/courseTransaction/importer/courseTransactionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
