import list from '../../modules/courseProgress/list/courseProgressListReducers';
import form from '../../modules/courseProgress/form/courseProgressFormReducers';
import view from '../../modules/courseProgress/view/courseProgressViewReducers';
import destroy from '../../modules/courseProgress/destroy/courseProgressDestroyReducers';
import importerReducer from '../../modules/courseProgress/importer/courseProgressImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
