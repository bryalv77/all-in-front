import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/conversation/importer/conversationImporterSelectors';
import ConversationService from 'src/modules/conversation/conversationService';
import fields from 'src/modules/conversation/importer/conversationImporterFields';
import { i18n } from 'src/i18n';

const conversationImporterActions = importerActions(
  'CONVERSATION_IMPORTER',
  selectors,
  ConversationService.import,
  fields,
  i18n('entities.conversation.importer.fileName'),
);

export default conversationImporterActions;