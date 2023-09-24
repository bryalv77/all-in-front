import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'postId',
    label: i18n('entities.postHashtag.fields.postId'),
    schema: schemas.relationToOne(
      i18n('entities.postHashtag.fields.postId'),
      {},
    ),
  },
  {
    name: 'hashtagId',
    label: i18n('entities.postHashtag.fields.hashtagId'),
    schema: schemas.relationToOne(
      i18n('entities.postHashtag.fields.hashtagId'),
      {},
    ),
  },
];
