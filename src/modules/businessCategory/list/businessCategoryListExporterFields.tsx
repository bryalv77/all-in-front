import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessCategory.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.businessCategory.fields.name'),
  },
  {
    name: 'logo',
    label: i18n('entities.businessCategory.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'parentBusinessType',
    label: i18n(
      'entities.businessCategory.fields.parentBusinessType',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'description',
    label: i18n(
      'entities.businessCategory.fields.description',
    ),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.businessCategory.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.businessCategory.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
