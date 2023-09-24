import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.subTasks.fields.id'),
  },
  {
    name: 'description',
    label: i18n('entities.subTasks.fields.description'),
  },
  {
    name: 'status',
    label: i18n('entities.subTasks.fields.status'),
  },
  {
    name: 'taskId',
    label: i18n('entities.subTasks.fields.taskId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.subTasks.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.subTasks.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
