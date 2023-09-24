import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'code',
    label: i18n('entities.promotions.fields.code'),
    schema: schemas.string(
      i18n('entities.promotions.fields.code'),
      {},
    ),
  },
  {
    name: 'discount',
    label: i18n('entities.promotions.fields.discount'),
    schema: schemas.decimal(
      i18n('entities.promotions.fields.discount'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.promotions.fields.startDate'),
    schema: schemas.date(
      i18n('entities.promotions.fields.startDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.promotions.fields.endDate'),
    schema: schemas.date(
      i18n('entities.promotions.fields.endDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'productId',
    label: i18n('entities.promotions.fields.productId'),
    schema: schemas.relationToOne(
      i18n('entities.promotions.fields.productId'),
      {},
    ),
  },
];