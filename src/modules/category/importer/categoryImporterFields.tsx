import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fintonicId',
    label: i18n('entities.category.fields.fintonicId'),
    schema: schemas.string(
      i18n('entities.category.fields.fintonicId'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.category.fields.name'),
    schema: schemas.string(
      i18n('entities.category.fields.name'),
      {},
    ),
  },
  {
    name: 'shortname',
    label: i18n('entities.category.fields.shortname'),
    schema: schemas.string(
      i18n('entities.category.fields.shortname'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.category.fields.logo'),
    schema: schemas.images(
      i18n('entities.category.fields.logo'),
      {},
    ),
  },
];