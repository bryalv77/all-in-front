import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseEnrollment.fields.id'),
  },
  {
    name: 'courseId',
    label: i18n(
      'entities.courseEnrollment.fields.courseId',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'studentId',
    label: i18n(
      'entities.courseEnrollment.fields.studentId',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'enrollmentDate',
    label: i18n(
      'entities.courseEnrollment.fields.enrollmentDate',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.courseEnrollment.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.courseEnrollment.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
