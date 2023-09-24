import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.brand.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.brand.fields.name'),
  },
  {
    name: 'address',
    label: i18n('entities.brand.fields.address'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'description',
    label: i18n('entities.brand.fields.description'),
  },
  {
    name: 'photo',
    label: i18n('entities.brand.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'active',
    label: i18n('entities.brand.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.brand.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.brand.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
