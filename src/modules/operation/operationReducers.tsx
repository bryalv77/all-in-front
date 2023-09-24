import list from 'src/modules/operation/list/operationListReducers';
import form from 'src/modules/operation/form/operationFormReducers';
import view from 'src/modules/operation/view/operationViewReducers';
import destroy from 'src/modules/operation/destroy/operationDestroyReducers';
import importerReducer from 'src/modules/operation/importer/operationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
