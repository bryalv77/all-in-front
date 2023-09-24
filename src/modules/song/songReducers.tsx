import list from 'src/modules/song/list/songListReducers';
import form from 'src/modules/song/form/songFormReducers';
import view from 'src/modules/song/view/songViewReducers';
import destroy from 'src/modules/song/destroy/songDestroyReducers';
import importerReducer from 'src/modules/song/importer/songImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
