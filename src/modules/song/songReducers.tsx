import list from '../../modules/song/list/songListReducers';
import form from '../../modules/song/form/songFormReducers';
import view from '../../modules/song/view/songViewReducers';
import destroy from '../../modules/song/destroy/songDestroyReducers';
import importerReducer from '../../modules/song/importer/songImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
