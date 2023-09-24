import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.deliveryMethod.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.deliveryMethod.fields.name'),
  },
  {
    name: 'userId',
    label: i18n('entities.deliveryMethod.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'vehicleInfo',
    label: i18n('entities.deliveryMethod.fields.vehicleInfo'),
  },
  {
    name: 'additionalInfo',
    label: i18n('entities.deliveryMethod.fields.additionalInfo'),
  },
  {
    name: 'active',
    label: i18n('entities.deliveryMethod.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.deliveryMethod.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.deliveryMethod.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
