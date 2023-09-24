import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.productReview.fields.id'),
  },
  {
    name: 'comment',
    label: i18n('entities.productReview.fields.comment'),
  },
  {
    name: 'productId',
    label: i18n('entities.productReview.fields.productId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'customerId',
    label: i18n('entities.productReview.fields.customerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'rating',
    label: i18n('entities.productReview.fields.rating'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.productReview.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.productReview.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
