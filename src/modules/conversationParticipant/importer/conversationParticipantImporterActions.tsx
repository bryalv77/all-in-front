import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/conversationParticipant/importer/conversationParticipantImporterSelectors';
import ConversationParticipantService from '../../../modules/conversationParticipant/conversationParticipantService';
import fields from '../../../modules/conversationParticipant/importer/conversationParticipantImporterFields';
import { i18n } from '../../../i18n';

const conversationParticipantImporterActions =
  importerActions(
    'CONVERSATIONPARTICIPANT_IMPORTER',
    selectors,
    ConversationParticipantService.import,
    fields,
    i18n(
      'entities.conversationParticipant.importer.fileName',
    ),
  );

export default conversationParticipantImporterActions;
