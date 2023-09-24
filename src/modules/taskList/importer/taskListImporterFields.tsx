import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.taskList.fields.name'),
    schema: schemas.string(
      i18n('entities.taskList.fields.name'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.taskList.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.taskList.fields.userId'),
      {},
    ),
  },
];
