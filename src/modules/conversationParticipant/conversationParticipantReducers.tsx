import list from '../../../modules/conversationParticipant/list/conversationParticipantListReducers';
import form from '../../../modules/conversationParticipant/form/conversationParticipantFormReducers';
import view from '../../../modules/conversationParticipant/view/conversationParticipantViewReducers';
import destroy from '../../../modules/conversationParticipant/destroy/conversationParticipantDestroyReducers';
import importerReducer from '../../../modules/conversationParticipant/importer/conversationParticipantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
