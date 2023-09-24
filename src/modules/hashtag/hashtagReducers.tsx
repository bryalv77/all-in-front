import list from 'src/modules/hashtag/list/hashtagListReducers';
import form from 'src/modules/hashtag/form/hashtagFormReducers';
import view from 'src/modules/hashtag/view/hashtagViewReducers';
import destroy from 'src/modules/hashtag/destroy/hashtagDestroyReducers';
import importerReducer from 'src/modules/hashtag/importer/hashtagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
