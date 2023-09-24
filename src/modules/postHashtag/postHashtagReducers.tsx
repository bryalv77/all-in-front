import list from 'src/modules/postHashtag/list/postHashtagListReducers';
import form from 'src/modules/postHashtag/form/postHashtagFormReducers';
import view from 'src/modules/postHashtag/view/postHashtagViewReducers';
import destroy from 'src/modules/postHashtag/destroy/postHashtagDestroyReducers';
import importerReducer from 'src/modules/postHashtag/importer/postHashtagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
