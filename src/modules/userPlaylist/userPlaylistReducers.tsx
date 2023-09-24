import list from 'src/modules/userPlaylist/list/userPlaylistListReducers';
import form from 'src/modules/userPlaylist/form/userPlaylistFormReducers';
import view from 'src/modules/userPlaylist/view/userPlaylistViewReducers';
import destroy from 'src/modules/userPlaylist/destroy/userPlaylistDestroyReducers';
import importerReducer from 'src/modules/userPlaylist/importer/userPlaylistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
