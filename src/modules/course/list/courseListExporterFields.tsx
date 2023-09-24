import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.course.fields.id'),
  },
  {
    name: 'teacherId',
    label: i18n('entities.course.fields.teacherId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'title',
    label: i18n('entities.course.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.course.fields.description'),
  },
  {
    name: 'price',
    label: i18n('entities.course.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.course.fields.hoursDuration'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'startDate',
    label: i18n('entities.course.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.course.fields.endDate'),
  },
  {
    name: 'level',
    label: i18n('entities.course.fields.level'),
  },
  {
    name: 'additionalInfo',
    label: i18n('entities.course.fields.additionalInfo'),
  },
  {
    name: 'active',
    label: i18n('entities.course.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.course.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.course.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
