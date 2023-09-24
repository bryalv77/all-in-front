import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'courseId',
    label: i18n(
      'entities.categoryCourseRelation.fields.courseId',
    ),
    schema: schemas.relationToOne(
      i18n(
        'entities.categoryCourseRelation.fields.courseId',
      ),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n(
      'entities.categoryCourseRelation.fields.category',
    ),
    schema: schemas.relationToOne(
      i18n(
        'entities.categoryCourseRelation.fields.category',
      ),
      {},
    ),
  },
];
