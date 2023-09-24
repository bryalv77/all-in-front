import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.address.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.address.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'addressName',
    label: i18n('entities.address.fields.addressName'),
  },
  {
    name: 'firstLine',
    label: i18n('entities.address.fields.firstLine'),
  },
  {
    name: 'secondLine',
    label: i18n('entities.address.fields.secondLine'),
  },
  {
    name: 'zipCode',
    label: i18n('entities.address.fields.zipCode'),
  },
  {
    name: 'city',
    label: i18n('entities.address.fields.city'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'phone',
    label: i18n('entities.address.fields.phone'),
  },
  {
    name: 'business',
    label: i18n('entities.address.fields.business'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'coordinates',
    label: i18n('entities.address.fields.coordinates'),
  },
  {
    name: 'urlMap',
    label: i18n('entities.address.fields.urlMap'),
  },
  {
    name: 'preferred',
    label: i18n('entities.address.fields.preferred'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.address.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.address.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
