import list from '../../modules/album/list/albumListReducers';
import form from '../../modules/album/form/albumFormReducers';
import view from '../../modules/album/view/albumViewReducers';
import destroy from '../../modules/album/destroy/albumDestroyReducers';
import importerReducer from '../../modules/album/importer/albumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
