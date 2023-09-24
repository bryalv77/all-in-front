import list from 'src/modules/promotions/list/promotionsListReducers';
import form from 'src/modules/promotions/form/promotionsFormReducers';
import view from 'src/modules/promotions/view/promotionsViewReducers';
import destroy from 'src/modules/promotions/destroy/promotionsDestroyReducers';
import importerReducer from 'src/modules/promotions/importer/promotionsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
