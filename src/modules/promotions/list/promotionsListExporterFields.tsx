import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.promotions.fields.id'),
  },
  {
    name: 'code',
    label: i18n('entities.promotions.fields.code'),
  },
  {
    name: 'discount',
    label: i18n('entities.promotions.fields.discount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'startDate',
    label: i18n('entities.promotions.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.promotions.fields.endDate'),
  },
  {
    name: 'productId',
    label: i18n('entities.promotions.fields.productId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.promotions.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.promotions.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
