import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.playlistSong.fields.id'),
  },
  {
    name: 'playlistId',
    label: i18n('entities.playlistSong.fields.playlistId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'songId',
    label: i18n('entities.playlistSong.fields.songId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'trackOrder',
    label: i18n('entities.playlistSong.fields.trackOrder'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.playlistSong.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.playlistSong.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
