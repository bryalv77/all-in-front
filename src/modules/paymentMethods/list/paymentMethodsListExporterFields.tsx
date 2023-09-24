import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.paymentMethods.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.paymentMethods.fields.name'),
  },
  {
    name: 'additionalInfo',
    label: i18n(
      'entities.paymentMethods.fields.additionalInfo',
    ),
  },
  {
    name: 'active',
    label: i18n('entities.paymentMethods.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.paymentMethods.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.paymentMethods.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
