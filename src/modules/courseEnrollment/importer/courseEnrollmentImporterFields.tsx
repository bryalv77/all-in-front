import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';
import moment from 'moment';

export default [
  {
    name: 'courseId',
    label: i18n(
      'entities.courseEnrollment.fields.courseId',
    ),
    schema: schemas.relationToOne(
      i18n('entities.courseEnrollment.fields.courseId'),
      {},
    ),
  },
  {
    name: 'studentId',
    label: i18n(
      'entities.courseEnrollment.fields.studentId',
    ),
    schema: schemas.relationToOne(
      i18n('entities.courseEnrollment.fields.studentId'),
      {},
    ),
  },
  {
    name: 'enrollmentDate',
    label: i18n(
      'entities.courseEnrollment.fields.enrollmentDate',
    ),
    schema: schemas.datetime(
      i18n(
        'entities.courseEnrollment.fields.enrollmentDate',
      ),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD HH:mm')
        : value,
  },
];
