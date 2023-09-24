import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.conversationParticipant.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.conversationParticipant.fields.userId'),
      {},
    ),
  },
  {
    name: 'conversationId',
    label: i18n('entities.conversationParticipant.fields.conversationId'),
    schema: schemas.relationToOne(
      i18n('entities.conversationParticipant.fields.conversationId'),
      {},
    ),
  },
];