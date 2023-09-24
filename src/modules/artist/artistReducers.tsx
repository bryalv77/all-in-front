import list from '../../../modules/artist/list/artistListReducers';
import form from '../../../modules/artist/form/artistFormReducers';
import view from '../../../modules/artist/view/artistViewReducers';
import destroy from '../../../modules/artist/destroy/artistDestroyReducers';
import importerReducer from '../../../modules/artist/importer/artistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
