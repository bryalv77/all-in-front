import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.category.fields.id'),
  },
  {
    name: 'fintonicId',
    label: i18n('entities.category.fields.fintonicId'),
  },
  {
    name: 'name',
    label: i18n('entities.category.fields.name'),
  },
  {
    name: 'shortname',
    label: i18n('entities.category.fields.shortname'),
  },
  {
    name: 'logo',
    label: i18n('entities.category.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.category.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.category.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
