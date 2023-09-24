import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.businessCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.businessCategory.fields.name'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.businessCategory.fields.logo'),
    schema: schemas.images(
      i18n('entities.businessCategory.fields.logo'),
      {},
    ),
  },
  {
    name: 'parentBusinessType',
    label: i18n(
      'entities.businessCategory.fields.parentBusinessType',
    ),
    schema: schemas.relationToOne(
      i18n(
        'entities.businessCategory.fields.parentBusinessType',
      ),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n(
      'entities.businessCategory.fields.description',
    ),
    schema: schemas.string(
      i18n('entities.businessCategory.fields.description'),
      {},
    ),
  },
];
