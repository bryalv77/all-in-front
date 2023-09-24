import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

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