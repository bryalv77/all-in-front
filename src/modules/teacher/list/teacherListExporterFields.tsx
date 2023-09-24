import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.teacher.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.teacher.fields.name'),
  },
  {
    name: 'photo',
    label: i18n('entities.teacher.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'userId',
    label: i18n('entities.teacher.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.teacher.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.teacher.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
