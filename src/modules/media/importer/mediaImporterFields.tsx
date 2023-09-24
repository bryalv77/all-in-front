import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'file',
    label: i18n('entities.media.fields.file'),
    schema: schemas.files(
      i18n('entities.media.fields.file'),
      {},
    ),
  },
  {
    name: 'metadata',
    label: i18n('entities.media.fields.metadata'),
    schema: schemas.string(
      i18n('entities.media.fields.metadata'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.media.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.media.fields.userId'),
      {},
    ),
  },
  {
    name: 'show',
    label: i18n('entities.media.fields.show'),
    schema: schemas.boolean(
      i18n('entities.media.fields.show'),
      {},
    ),
  },
];