import list from 'src/modules/playlistSong/list/playlistSongListReducers';
import form from 'src/modules/playlistSong/form/playlistSongFormReducers';
import view from 'src/modules/playlistSong/view/playlistSongViewReducers';
import destroy from 'src/modules/playlistSong/destroy/playlistSongDestroyReducers';
import importerReducer from 'src/modules/playlistSong/importer/playlistSongImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
