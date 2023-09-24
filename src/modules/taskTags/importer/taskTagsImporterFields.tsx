import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'taskId',
    label: i18n('entities.taskTags.fields.taskId'),
    schema: schemas.relationToOne(
      i18n('entities.taskTags.fields.taskId'),
      {},
    ),
  },
  {
    name: 'tagId',
    label: i18n('entities.taskTags.fields.tagId'),
    schema: schemas.relationToOne(
      i18n('entities.taskTags.fields.tagId'),
      {},
    ),
  },
];