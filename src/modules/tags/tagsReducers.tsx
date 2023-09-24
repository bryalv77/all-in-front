import list from '../../../modules/tags/list/tagsListReducers';
import form from '../../../modules/tags/form/tagsFormReducers';
import view from '../../../modules/tags/view/tagsViewReducers';
import destroy from '../../../modules/tags/destroy/tagsDestroyReducers';
import importerReducer from '../../../modules/tags/importer/tagsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
