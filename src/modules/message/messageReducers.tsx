import list from '../../modules/message/list/messageListReducers';
import form from '../../modules/message/form/messageFormReducers';
import view from '../../modules/message/view/messageViewReducers';
import destroy from '../../modules/message/destroy/messageDestroyReducers';
import importerReducer from '../../modules/message/importer/messageImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
