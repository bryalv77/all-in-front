import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';
import conversationEnumerators from '../../../modules/conversation/conversationEnumerators';

export default [
  {
    name: 'type',
    label: i18n('entities.conversation.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.conversation.fields.type'),
      {
        options: conversationEnumerators.type,
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.conversation.fields.name'),
    schema: schemas.string(
      i18n('entities.conversation.fields.name'),
      {},
    ),
  },
  {
    name: 'avatar',
    label: i18n('entities.conversation.fields.avatar'),
    schema: schemas.images(
      i18n('entities.conversation.fields.avatar'),
      {},
    ),
  },
];
