import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'orderId',
    label: i18n('entities.orderDetail.fields.orderId'),
    schema: schemas.relationToOne(
      i18n('entities.orderDetail.fields.orderId'),
      {},
    ),
  },
  {
    name: 'productId',
    label: i18n('entities.orderDetail.fields.productId'),
    schema: schemas.relationToOne(
      i18n('entities.orderDetail.fields.productId'),
      {},
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.orderDetail.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.orderDetail.fields.quantity'),
      {},
    ),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.orderDetail.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.orderDetail.fields.unitPrice'),
      {},
    ),
  },
];