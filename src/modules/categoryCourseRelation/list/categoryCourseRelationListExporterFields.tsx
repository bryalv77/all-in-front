import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n(
      'entities.categoryCourseRelation.fields.id',
    ),
  },
  {
    name: 'courseId',
    label: i18n(
      'entities.categoryCourseRelation.fields.courseId',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n(
      'entities.categoryCourseRelation.fields.category',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.categoryCourseRelation.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.categoryCourseRelation.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
