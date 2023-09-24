import list from 'src/modules/artist/list/artistListReducers';
import form from 'src/modules/artist/form/artistFormReducers';
import view from 'src/modules/artist/view/artistViewReducers';
import destroy from 'src/modules/artist/destroy/artistDestroyReducers';
import importerReducer from 'src/modules/artist/importer/artistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
