import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.lesson.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.lesson.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.lesson.fields.description'),
  },
  {
    name: 'externalUrl',
    label: i18n('entities.lesson.fields.externalUrl'),
  },
  {
    name: 'media',
    label: i18n('entities.lesson.fields.media'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.lesson.fields.hoursDuration'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'courseId',
    label: i18n('entities.lesson.fields.courseId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'active',
    label: i18n('entities.lesson.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.lesson.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.lesson.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
