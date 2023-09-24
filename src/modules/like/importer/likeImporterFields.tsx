import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

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