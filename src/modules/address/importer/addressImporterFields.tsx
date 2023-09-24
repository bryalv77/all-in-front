import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'customer',
    label: i18n('entities.address.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.address.fields.customer'),
      {},
    ),
  },
  {
    name: 'addressName',
    label: i18n('entities.address.fields.addressName'),
    schema: schemas.string(
      i18n('entities.address.fields.addressName'),
      {},
    ),
  },
  {
    name: 'firstLine',
    label: i18n('entities.address.fields.firstLine'),
    schema: schemas.string(
      i18n('entities.address.fields.firstLine'),
      {},
    ),
  },
  {
    name: 'secondLine',
    label: i18n('entities.address.fields.secondLine'),
    schema: schemas.string(
      i18n('entities.address.fields.secondLine'),
      {},
    ),
  },
  {
    name: 'zipCode',
    label: i18n('entities.address.fields.zipCode'),
    schema: schemas.string(
      i18n('entities.address.fields.zipCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.address.fields.city'),
    schema: schemas.relationToOne(
      i18n('entities.address.fields.city'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.address.fields.phone'),
    schema: schemas.string(
      i18n('entities.address.fields.phone'),
      {},
    ),
  },
  {
    name: 'business',
    label: i18n('entities.address.fields.business'),
    schema: schemas.relationToOne(
      i18n('entities.address.fields.business'),
      {},
    ),
  },
  {
    name: 'coordinates',
    label: i18n('entities.address.fields.coordinates'),
    schema: schemas.string(
      i18n('entities.address.fields.coordinates'),
      {},
    ),
  },
  {
    name: 'urlMap',
    label: i18n('entities.address.fields.urlMap'),
    schema: schemas.string(
      i18n('entities.address.fields.urlMap'),
      {},
    ),
  },
  {
    name: 'preferred',
    label: i18n('entities.address.fields.preferred'),
    schema: schemas.boolean(
      i18n('entities.address.fields.preferred'),
      {},
    ),
  },
];
