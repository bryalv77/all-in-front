import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.country.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.country.fields.name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.country.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.country.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
