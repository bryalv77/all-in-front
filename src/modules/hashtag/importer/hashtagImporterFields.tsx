import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'hashtagText',
    label: i18n('entities.hashtag.fields.hashtagText'),
    schema: schemas.string(
      i18n('entities.hashtag.fields.hashtagText'),
      {},
    ),
  },
  {
    name: 'usageCount',
    label: i18n('entities.hashtag.fields.usageCount'),
    schema: schemas.integer(
      i18n('entities.hashtag.fields.usageCount'),
      {},
    ),
  },
];
