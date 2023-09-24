import list from '../../modules/hashtag/list/hashtagListReducers';
import form from '../../modules/hashtag/form/hashtagFormReducers';
import view from '../../modules/hashtag/view/hashtagViewReducers';
import destroy from '../../modules/hashtag/destroy/hashtagDestroyReducers';
import importerReducer from '../../modules/hashtag/importer/hashtagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
