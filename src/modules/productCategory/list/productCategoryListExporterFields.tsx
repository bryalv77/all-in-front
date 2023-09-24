import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.productCategory.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.productCategory.fields.name'),
  },
  {
    name: 'parentCategory',
    label: i18n(
      'entities.productCategory.fields.parentCategory',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'photo',
    label: i18n('entities.productCategory.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.productCategory.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.productCategory.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
