import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';
import moment from 'moment';

export default [
  {
    name: 'content',
    label: i18n('entities.posts.fields.content'),
    schema: schemas.string(
      i18n('entities.posts.fields.content'),
      {},
    ),
  },
  {
    name: 'postDate',
    label: i18n('entities.posts.fields.postDate'),
    schema: schemas.datetime(
      i18n('entities.posts.fields.postDate'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD HH:mm')
        : value,
  },
  {
    name: 'media',
    label: i18n('entities.posts.fields.media'),
    schema: schemas.files(
      i18n('entities.posts.fields.media'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.posts.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.posts.fields.userId'),
      {},
    ),
  },
];
