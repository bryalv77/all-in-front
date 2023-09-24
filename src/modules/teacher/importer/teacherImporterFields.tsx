import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.teacher.fields.name'),
    schema: schemas.string(
      i18n('entities.teacher.fields.name'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.teacher.fields.photo'),
    schema: schemas.images(
      i18n('entities.teacher.fields.photo'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.teacher.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.teacher.fields.userId'),
      {},
    ),
  },
];