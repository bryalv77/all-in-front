import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
    schema: schemas.string(
      i18n('entities.product.fields.name'),
      {
        required: true,
        min: 2,
        max: 255,
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
    schema: schemas.string(
      i18n('entities.product.fields.description'),
      {
        max: 21845,
      },
    ),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.product.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.product.fields.unitPrice'),
      {
        required: true,
        scale: 2,
        min: 0.01,
        max: 99999,
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.product.fields.photos'),
    schema: schemas.images(
      i18n('entities.product.fields.photos'),
      {
        max: 3,
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.category'),
      {},
    ),
  },
  {
    name: 'stock',
    label: i18n('entities.product.fields.stock'),
    schema: schemas.integer(
      i18n('entities.product.fields.stock'),
      {},
    ),
  },
  {
    name: 'brandId',
    label: i18n('entities.product.fields.brandId'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.brandId'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.product.fields.active'),
    schema: schemas.boolean(
      i18n('entities.product.fields.active'),
      {},
    ),
  },
];
