import list from '../../modules/playlistSong/list/playlistSongListReducers';
import form from '../../modules/playlistSong/form/playlistSongFormReducers';
import view from '../../modules/playlistSong/view/playlistSongViewReducers';
import destroy from '../../modules/playlistSong/destroy/playlistSongDestroyReducers';
import importerReducer from '../../modules/playlistSong/importer/playlistSongImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
