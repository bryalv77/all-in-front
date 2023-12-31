import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.taskList.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.taskList.fields.name'),
  },
  {
    name: 'userId',
    label: i18n('entities.taskList.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.taskList.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.taskList.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
