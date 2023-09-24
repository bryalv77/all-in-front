import list from '../../modules/city/list/cityListReducers';
import form from '../../modules/city/form/cityFormReducers';
import view from '../../modules/city/view/cityViewReducers';
import destroy from '../../modules/city/destroy/cityDestroyReducers';
import importerReducer from '../../modules/city/importer/cityImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
