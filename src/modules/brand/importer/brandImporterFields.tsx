import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.brand.fields.name'),
    schema: schemas.string(
      i18n('entities.brand.fields.name'),
      {},
    ),
  },
  {
    name: 'address',
    label: i18n('entities.brand.fields.address'),
    schema: schemas.relationToOne(
      i18n('entities.brand.fields.address'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.brand.fields.description'),
    schema: schemas.string(
      i18n('entities.brand.fields.description'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.brand.fields.photo'),
    schema: schemas.images(
      i18n('entities.brand.fields.photo'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.brand.fields.active'),
    schema: schemas.boolean(
      i18n('entities.brand.fields.active'),
      {},
    ),
  },
];