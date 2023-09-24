import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/conversationParticipant/importer/conversationParticipantImporterSelectors';
import ConversationParticipantService from 'src/modules/conversationParticipant/conversationParticipantService';
import fields from 'src/modules/conversationParticipant/importer/conversationParticipantImporterFields';
import { i18n } from 'src/i18n';

const conversationParticipantImporterActions = importerActions(
  'CONVERSATIONPARTICIPANT_IMPORTER',
  selectors,
  ConversationParticipantService.import,
  fields,
  i18n('entities.conversationParticipant.importer.fileName'),
);

export default conversationParticipantImporterActions;