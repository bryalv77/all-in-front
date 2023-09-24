import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import tasksEnumerators from 'src/modules/tasks/tasksEnumerators';
import moment from 'moment';

export default [
  {
    name: 'description',
    label: i18n('entities.tasks.fields.description'),
    schema: schemas.string(
      i18n('entities.tasks.fields.description'),
      {},
    ),
  },
  {
    name: 'dueDate',
    label: i18n('entities.tasks.fields.dueDate'),
    schema: schemas.date(
      i18n('entities.tasks.fields.dueDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'status',
    label: i18n('entities.tasks.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.tasks.fields.status'),
      {
        "options": tasksEnumerators.status
      },
    ),
  },
  {
    name: 'taskList',
    label: i18n('entities.tasks.fields.taskList'),
    schema: schemas.relationToOne(
      i18n('entities.tasks.fields.taskList'),
      {},
    ),
  },
];