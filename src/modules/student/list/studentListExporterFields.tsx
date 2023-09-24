import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.student.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.student.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.student.fields.name'),
  },
  {
    name: 'photo',
    label: i18n('entities.student.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.student.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.student.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
