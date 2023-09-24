import list from '../../modules/operation/list/operationListReducers';
import form from '../../modules/operation/form/operationFormReducers';
import view from '../../modules/operation/view/operationViewReducers';
import destroy from '../../modules/operation/destroy/operationDestroyReducers';
import importerReducer from '../../modules/operation/importer/operationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
