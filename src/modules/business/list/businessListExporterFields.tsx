import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.business.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.business.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.business.fields.description'),
  },
  {
    name: 'logo',
    label: i18n('entities.business.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'category',
    label: i18n('entities.business.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'address',
    label: i18n('entities.business.fields.address'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'owner',
    label: i18n('entities.business.fields.owner'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'active',
    label: i18n('entities.business.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.business.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.business.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
