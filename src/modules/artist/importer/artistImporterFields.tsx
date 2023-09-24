import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.artist.fields.name'),
    schema: schemas.string(
      i18n('entities.artist.fields.name'),
      {},
    ),
  },
  {
    name: 'bio',
    label: i18n('entities.artist.fields.bio'),
    schema: schemas.string(
      i18n('entities.artist.fields.bio'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.artist.fields.photo'),
    schema: schemas.images(
      i18n('entities.artist.fields.photo'),
      {},
    ),
  },
];
