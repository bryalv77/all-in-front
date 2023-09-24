import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tags.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.tags.fields.name'),
  },
  {
    name: 'userId',
    label: i18n('entities.tags.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tags.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tags.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
