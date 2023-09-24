import list from 'src/modules/album/list/albumListReducers';
import form from 'src/modules/album/form/albumFormReducers';
import view from 'src/modules/album/view/albumViewReducers';
import destroy from 'src/modules/album/destroy/albumDestroyReducers';
import importerReducer from 'src/modules/album/importer/albumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
