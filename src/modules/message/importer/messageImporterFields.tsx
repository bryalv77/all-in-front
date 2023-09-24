import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';
import messageEnumerators from '../../../modules/message/messageEnumerators';

export default [
  {
    name: 'senderId',
    label: i18n('entities.message.fields.senderId'),
    schema: schemas.relationToOne(
      i18n('entities.message.fields.senderId'),
      {},
    ),
  },
  {
    name: 'recipientId',
    label: i18n('entities.message.fields.recipientId'),
    schema: schemas.relationToOne(
      i18n('entities.message.fields.recipientId'),
      {},
    ),
  },
  {
    name: 'content',
    label: i18n('entities.message.fields.content'),
    schema: schemas.string(
      i18n('entities.message.fields.content'),
      {},
    ),
  },
  {
    name: 'media',
    label: i18n('entities.message.fields.media'),
    schema: schemas.files(
      i18n('entities.message.fields.media'),
      {},
    ),
  },
  {
    name: 'conversationId',
    label: i18n('entities.message.fields.conversationId'),
    schema: schemas.relationToOne(
      i18n('entities.message.fields.conversationId'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.message.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.message.fields.status'),
      {
        options: messageEnumerators.status,
      },
    ),
  },
];
