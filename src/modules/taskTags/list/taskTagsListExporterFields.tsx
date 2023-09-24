import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.taskTags.fields.id'),
  },
  {
    name: 'taskId',
    label: i18n('entities.taskTags.fields.taskId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'tagId',
    label: i18n('entities.taskTags.fields.tagId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.taskTags.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.taskTags.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
