import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.orderDetail.fields.id'),
  },
  {
    name: 'orderId',
    label: i18n('entities.orderDetail.fields.orderId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'productId',
    label: i18n('entities.orderDetail.fields.productId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.orderDetail.fields.quantity'),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.orderDetail.fields.unitPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.orderDetail.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.orderDetail.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
