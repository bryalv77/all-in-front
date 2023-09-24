import list from 'src/modules/media/list/mediaListReducers';
import form from 'src/modules/media/form/mediaFormReducers';
import view from 'src/modules/media/view/mediaViewReducers';
import destroy from 'src/modules/media/destroy/mediaDestroyReducers';
import importerReducer from 'src/modules/media/importer/mediaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
