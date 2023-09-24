import list from '../../../modules/postHashtag/list/postHashtagListReducers';
import form from '../../../modules/postHashtag/form/postHashtagFormReducers';
import view from '../../../modules/postHashtag/view/postHashtagViewReducers';
import destroy from '../../../modules/postHashtag/destroy/postHashtagDestroyReducers';
import importerReducer from '../../../modules/postHashtag/importer/postHashtagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
