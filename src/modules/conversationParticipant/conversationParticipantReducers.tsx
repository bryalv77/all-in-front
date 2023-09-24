import list from 'src/modules/conversationParticipant/list/conversationParticipantListReducers';
import form from 'src/modules/conversationParticipant/form/conversationParticipantFormReducers';
import view from 'src/modules/conversationParticipant/view/conversationParticipantViewReducers';
import destroy from 'src/modules/conversationParticipant/destroy/conversationParticipantDestroyReducers';
import importerReducer from 'src/modules/conversationParticipant/importer/conversationParticipantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
