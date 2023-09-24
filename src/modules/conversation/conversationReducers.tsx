import list from '../../modules/conversation/list/conversationListReducers';
import form from '../../modules/conversation/form/conversationFormReducers';
import view from '../../modules/conversation/view/conversationViewReducers';
import destroy from '../../modules/conversation/destroy/conversationDestroyReducers';
import importerReducer from '../../modules/conversation/importer/conversationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
