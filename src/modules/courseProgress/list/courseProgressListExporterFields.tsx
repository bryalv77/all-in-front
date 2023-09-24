import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseProgress.fields.id'),
  },
  {
    name: 'studentId',
    label: i18n('entities.courseProgress.fields.studentId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'courseId',
    label: i18n('entities.courseProgress.fields.courseId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'progressPercentage',
    label: i18n(
      'entities.courseProgress.fields.progressPercentage',
    ),
    render: exporterRenders.decimal(),
  },
  {
    name: 'currentLesson',
    label: i18n(
      'entities.courseProgress.fields.currentLesson',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseProgress.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseProgress.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
