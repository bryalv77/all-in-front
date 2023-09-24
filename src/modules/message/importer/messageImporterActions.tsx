import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/message/importer/messageImporterSelectors';
import MessageService from '../../../modules/message/messageService';
import fields from '../../../modules/message/importer/messageImporterFields';
import { i18n } from '../../../i18n';

const messageImporterActions = importerActions(
  'MESSAGE_IMPORTER',
  selectors,
  MessageService.import,
  fields,
  i18n('entities.message.importer.fileName'),
);

export default messageImporterActions;
