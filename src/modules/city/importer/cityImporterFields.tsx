import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.city.fields.name'),
    schema: schemas.string(
      i18n('entities.city.fields.name'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.city.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.city.fields.country'),
      {},
    ),
  },
];