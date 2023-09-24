import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/conversation/importer/conversationImporterSelectors';
import ConversationService from '../../../modules/conversation/conversationService';
import fields from '../../../modules/conversation/importer/conversationImporterFields';
import { i18n } from '../../../i18n';

const conversationImporterActions = importerActions(
  'CONVERSATION_IMPORTER',
  selectors,
  ConversationService.import,
  fields,
  i18n('entities.conversation.importer.fileName'),
);

export default conversationImporterActions;
