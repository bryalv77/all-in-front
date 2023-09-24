import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.tags.fields.name'),
    schema: schemas.string(
      i18n('entities.tags.fields.name'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.tags.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.tags.fields.userId'),
      {},
    ),
  },
];