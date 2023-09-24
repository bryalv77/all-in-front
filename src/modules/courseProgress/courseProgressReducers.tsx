import list from 'src/modules/courseProgress/list/courseProgressListReducers';
import form from 'src/modules/courseProgress/form/courseProgressFormReducers';
import view from 'src/modules/courseProgress/view/courseProgressViewReducers';
import destroy from 'src/modules/courseProgress/destroy/courseProgressDestroyReducers';
import importerReducer from 'src/modules/courseProgress/importer/courseProgressImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
