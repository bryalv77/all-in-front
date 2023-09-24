import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.playlist.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.playlist.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.playlist.fields.description'),
  },
  {
    name: 'userId',
    label: i18n('entities.playlist.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.playlist.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.playlist.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
