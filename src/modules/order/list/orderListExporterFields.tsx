import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.order.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.order.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.order.fields.status'),
  },
  {
    name: 'attachments',
    label: i18n('entities.order.fields.attachments'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'shippingPrice',
    label: i18n('entities.order.fields.shippingPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'total',
    label: i18n('entities.order.fields.total'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'deliver',
    label: i18n('entities.order.fields.deliver'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.order.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.order.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
