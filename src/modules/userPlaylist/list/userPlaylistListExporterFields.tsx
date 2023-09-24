import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.userPlaylist.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.userPlaylist.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'playlistId',
    label: i18n('entities.userPlaylist.fields.playlistId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.userPlaylist.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.userPlaylist.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
