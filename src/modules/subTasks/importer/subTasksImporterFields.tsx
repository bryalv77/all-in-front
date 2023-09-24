import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import subTasksEnumerators from 'src/modules/subTasks/subTasksEnumerators';

export default [
  {
    name: 'description',
    label: i18n('entities.subTasks.fields.description'),
    schema: schemas.string(
      i18n('entities.subTasks.fields.description'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.subTasks.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.subTasks.fields.status'),
      {
        "options": subTasksEnumerators.status
      },
    ),
  },
  {
    name: 'taskId',
    label: i18n('entities.subTasks.fields.taskId'),
    schema: schemas.relationToOne(
      i18n('entities.subTasks.fields.taskId'),
      {},
    ),
  },
];