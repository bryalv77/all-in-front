import list from '../../modules/userPlaylist/list/userPlaylistListReducers';
import form from '../../modules/userPlaylist/form/userPlaylistFormReducers';
import view from '../../modules/userPlaylist/view/userPlaylistViewReducers';
import destroy from '../../modules/userPlaylist/destroy/userPlaylistDestroyReducers';
import importerReducer from '../../modules/userPlaylist/importer/userPlaylistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
