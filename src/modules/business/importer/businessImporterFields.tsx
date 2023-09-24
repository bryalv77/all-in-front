import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.business.fields.name'),
    schema: schemas.string(
      i18n('entities.business.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.business.fields.description'),
    schema: schemas.string(
      i18n('entities.business.fields.description'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.business.fields.logo'),
    schema: schemas.images(
      i18n('entities.business.fields.logo'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.business.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.category'),
      {},
    ),
  },
  {
    name: 'address',
    label: i18n('entities.business.fields.address'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.address'),
      {},
    ),
  },
  {
    name: 'owner',
    label: i18n('entities.business.fields.owner'),
    schema: schemas.relationToMany(
      i18n('entities.business.fields.owner'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.business.fields.active'),
    schema: schemas.boolean(
      i18n('entities.business.fields.active'),
      {},
    ),
  },
];