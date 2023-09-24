import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'amount',
    label: i18n('entities.courseTransaction.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.courseTransaction.fields.amount'),
      {},
    ),
  },
  {
    name: 'transactionDate',
    label: i18n('entities.courseTransaction.fields.transactionDate'),
    schema: schemas.datetime(
      i18n('entities.courseTransaction.fields.transactionDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'courseId',
    label: i18n('entities.courseTransaction.fields.courseId'),
    schema: schemas.relationToOne(
      i18n('entities.courseTransaction.fields.courseId'),
      {},
    ),
  },
  {
    name: 'studentId',
    label: i18n('entities.courseTransaction.fields.studentId'),
    schema: schemas.relationToOne(
      i18n('entities.courseTransaction.fields.studentId'),
      {},
    ),
  },
];