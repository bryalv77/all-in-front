import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tasks.fields.id'),
  },
  {
    name: 'description',
    label: i18n('entities.tasks.fields.description'),
  },
  {
    name: 'dueDate',
    label: i18n('entities.tasks.fields.dueDate'),
  },
  {
    name: 'status',
    label: i18n('entities.tasks.fields.status'),
  },
  {
    name: 'taskList',
    label: i18n('entities.tasks.fields.taskList'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tasks.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tasks.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
