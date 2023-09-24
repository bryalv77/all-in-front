import list from 'src/modules/playlist/list/playlistListReducers';
import form from 'src/modules/playlist/form/playlistFormReducers';
import view from 'src/modules/playlist/view/playlistViewReducers';
import destroy from 'src/modules/playlist/destroy/playlistDestroyReducers';
import importerReducer from 'src/modules/playlist/importer/playlistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
