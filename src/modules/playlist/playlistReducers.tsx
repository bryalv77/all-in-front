import list from '../../modules/playlist/list/playlistListReducers';
import form from '../../modules/playlist/form/playlistFormReducers';
import view from '../../modules/playlist/view/playlistViewReducers';
import destroy from '../../modules/playlist/destroy/playlistDestroyReducers';
import importerReducer from '../../modules/playlist/importer/playlistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
