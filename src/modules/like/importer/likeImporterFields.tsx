import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.like.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.like.fields.userId'),
      {},
    ),
  },
  {
    name: 'postId',
    label: i18n('entities.like.fields.postId'),
    schema: schemas.relationToOne(
      i18n('entities.like.fields.postId'),
      {},
    ),
  },
];
