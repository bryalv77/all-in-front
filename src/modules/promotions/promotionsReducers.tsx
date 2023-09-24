import list from '../../modules/promotions/list/promotionsListReducers';
import form from '../../modules/promotions/form/promotionsFormReducers';
import view from '../../modules/promotions/view/promotionsViewReducers';
import destroy from '../../modules/promotions/destroy/promotionsDestroyReducers';
import importerReducer from '../../modules/promotions/importer/promotionsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
