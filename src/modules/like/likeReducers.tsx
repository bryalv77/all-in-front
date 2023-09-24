import list from '../../modules/like/list/likeListReducers';
import form from '../../modules/like/form/likeFormReducers';
import view from '../../modules/like/view/likeViewReducers';
import destroy from '../../modules/like/destroy/likeDestroyReducers';
import importerReducer from '../../modules/like/importer/likeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
