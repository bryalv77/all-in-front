import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.service.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.service.fields.name'),
  },
  {
    name: 'photo',
    label: i18n('entities.service.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'description',
    label: i18n('entities.service.fields.description'),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.service.fields.hoursDuration'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'price',
    label: i18n('entities.service.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'businessId',
    label: i18n('entities.service.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'active',
    label: i18n('entities.service.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.service.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.service.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
