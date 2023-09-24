import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.courseCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.courseCategory.fields.name'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.courseCategory.fields.photo'),
    schema: schemas.images(
      i18n('entities.courseCategory.fields.photo'),
      {},
    ),
  },
  {
    name: 'parentCategory',
    label: i18n('entities.courseCategory.fields.parentCategory'),
    schema: schemas.relationToOne(
      i18n('entities.courseCategory.fields.parentCategory'),
      {},
    ),
  },
];