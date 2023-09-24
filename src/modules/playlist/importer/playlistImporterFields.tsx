import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.playlist.fields.name'),
    schema: schemas.string(
      i18n('entities.playlist.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.playlist.fields.description'),
    schema: schemas.string(
      i18n('entities.playlist.fields.description'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.playlist.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.playlist.fields.userId'),
      {},
    ),
  },
];
