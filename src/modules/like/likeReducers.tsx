import list from 'src/modules/like/list/likeListReducers';
import form from 'src/modules/like/form/likeFormReducers';
import view from 'src/modules/like/view/likeViewReducers';
import destroy from 'src/modules/like/destroy/likeDestroyReducers';
import importerReducer from 'src/modules/like/importer/likeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
