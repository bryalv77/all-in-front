import list from 'src/modules/conversation/list/conversationListReducers';
import form from 'src/modules/conversation/form/conversationFormReducers';
import view from 'src/modules/conversation/view/conversationViewReducers';
import destroy from 'src/modules/conversation/destroy/conversationDestroyReducers';
import importerReducer from 'src/modules/conversation/importer/conversationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
