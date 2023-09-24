import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'studentId',
    label: i18n('entities.courseProgress.fields.studentId'),
    schema: schemas.relationToOne(
      i18n('entities.courseProgress.fields.studentId'),
      {},
    ),
  },
  {
    name: 'courseId',
    label: i18n('entities.courseProgress.fields.courseId'),
    schema: schemas.relationToOne(
      i18n('entities.courseProgress.fields.courseId'),
      {},
    ),
  },
  {
    name: 'progressPercentage',
    label: i18n('entities.courseProgress.fields.progressPercentage'),
    schema: schemas.decimal(
      i18n('entities.courseProgress.fields.progressPercentage'),
      {},
    ),
  },
  {
    name: 'currentLesson',
    label: i18n('entities.courseProgress.fields.currentLesson'),
    schema: schemas.relationToOne(
      i18n('entities.courseProgress.fields.currentLesson'),
      {},
    ),
  },
];