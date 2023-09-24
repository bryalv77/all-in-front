import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseCategory.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.courseCategory.fields.name'),
  },
  {
    name: 'photo',
    label: i18n('entities.courseCategory.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'parentCategory',
    label: i18n(
      'entities.courseCategory.fields.parentCategory',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseCategory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseCategory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
