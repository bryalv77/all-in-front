import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseTransaction.fields.id'),
  },
  {
    name: 'amount',
    label: i18n('entities.courseTransaction.fields.amount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'transactionDate',
    label: i18n('entities.courseTransaction.fields.transactionDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'courseId',
    label: i18n('entities.courseTransaction.fields.courseId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'studentId',
    label: i18n('entities.courseTransaction.fields.studentId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseTransaction.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseTransaction.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
