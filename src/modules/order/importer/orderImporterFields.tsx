import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import orderEnumerators from 'src/modules/order/orderEnumerators';

export default [
  {
    name: 'customer',
    label: i18n('entities.order.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.customer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.order.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.order.fields.status'),
      {
        "options": orderEnumerators.status
      },
    ),
  },
  {
    name: 'attachments',
    label: i18n('entities.order.fields.attachments'),
    schema: schemas.files(
      i18n('entities.order.fields.attachments'),
      {
        "max": 3
      },
    ),
  },
  {
    name: 'shippingPrice',
    label: i18n('entities.order.fields.shippingPrice'),
    schema: schemas.decimal(
      i18n('entities.order.fields.shippingPrice'),
      {},
    ),
  },
  {
    name: 'total',
    label: i18n('entities.order.fields.total'),
    schema: schemas.decimal(
      i18n('entities.order.fields.total'),
      {},
    ),
  },
  {
    name: 'deliver',
    label: i18n('entities.order.fields.deliver'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.deliver'),
      {},
    ),
  },
];