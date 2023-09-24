import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.followers.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.followers.fields.userId'),
      {},
    ),
  },
  {
    name: 'followerId',
    label: i18n('entities.followers.fields.followerId'),
    schema: schemas.relationToOne(
      i18n('entities.followers.fields.followerId'),
      {},
    ),
  },
];
