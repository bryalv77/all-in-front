import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.productCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.productCategory.fields.name'),
      {},
    ),
  },
  {
    name: 'parentCategory',
    label: i18n('entities.productCategory.fields.parentCategory'),
    schema: schemas.relationToOne(
      i18n('entities.productCategory.fields.parentCategory'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.productCategory.fields.photo'),
    schema: schemas.images(
      i18n('entities.productCategory.fields.photo'),
      {},
    ),
  },
];