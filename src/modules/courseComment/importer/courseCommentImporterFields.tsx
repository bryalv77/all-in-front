import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'comment',
    label: i18n('entities.courseComment.fields.comment'),
    schema: schemas.string(
      i18n('entities.courseComment.fields.comment'),
      {},
    ),
  },
  {
    name: 'studentId',
    label: i18n('entities.courseComment.fields.studentId'),
    schema: schemas.relationToOne(
      i18n('entities.courseComment.fields.studentId'),
      {},
    ),
  },
  {
    name: 'courseId',
    label: i18n('entities.courseComment.fields.courseId'),
    schema: schemas.relationToOne(
      i18n('entities.courseComment.fields.courseId'),
      {},
    ),
  },
  {
    name: 'lessonId',
    label: i18n('entities.courseComment.fields.lessonId'),
    schema: schemas.relationToOne(
      i18n('entities.courseComment.fields.lessonId'),
      {},
    ),
  },
  {
    name: 'media',
    label: i18n('entities.courseComment.fields.media'),
    schema: schemas.files(
      i18n('entities.courseComment.fields.media'),
      {},
    ),
  },
];
