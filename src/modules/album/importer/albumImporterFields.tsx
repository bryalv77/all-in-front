import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.album.fields.title'),
    schema: schemas.string(
      i18n('entities.album.fields.title'),
      {},
    ),
  },
  {
    name: 'artistId',
    label: i18n('entities.album.fields.artistId'),
    schema: schemas.relationToOne(
      i18n('entities.album.fields.artistId'),
      {},
    ),
  },
  {
    name: 'year',
    label: i18n('entities.album.fields.year'),
    schema: schemas.integer(
      i18n('entities.album.fields.year'),
      {},
    ),
  },
  {
    name: 'cover',
    label: i18n('entities.album.fields.cover'),
    schema: schemas.images(
      i18n('entities.album.fields.cover'),
      {},
    ),
  },
];
