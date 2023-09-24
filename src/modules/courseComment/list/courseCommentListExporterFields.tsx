import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseComment.fields.id'),
  },
  {
    name: 'comment',
    label: i18n('entities.courseComment.fields.comment'),
  },
  {
    name: 'studentId',
    label: i18n('entities.courseComment.fields.studentId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'courseId',
    label: i18n('entities.courseComment.fields.courseId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'lessonId',
    label: i18n('entities.courseComment.fields.lessonId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'media',
    label: i18n('entities.courseComment.fields.media'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseComment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseComment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
