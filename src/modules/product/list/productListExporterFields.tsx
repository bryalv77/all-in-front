import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.product.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.product.fields.unitPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'photos',
    label: i18n('entities.product.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'stock',
    label: i18n('entities.product.fields.stock'),
  },
  {
    name: 'brandId',
    label: i18n('entities.product.fields.brandId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'active',
    label: i18n('entities.product.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.product.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.product.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
