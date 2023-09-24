import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.student.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.student.fields.userId'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.student.fields.name'),
    schema: schemas.string(
      i18n('entities.student.fields.name'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.student.fields.photo'),
    schema: schemas.images(
      i18n('entities.student.fields.photo'),
      {},
    ),
  },
];