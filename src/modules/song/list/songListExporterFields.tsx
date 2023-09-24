import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.song.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.song.fields.title'),
  },
  {
    name: 'artistId',
    label: i18n('entities.song.fields.artistId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'albumId',
    label: i18n('entities.song.fields.albumId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'duration',
    label: i18n('entities.song.fields.duration'),
  },
  {
    name: 'genre',
    label: i18n('entities.song.fields.genre'),
  },
  {
    name: 'externalUrl',
    label: i18n('entities.song.fields.externalUrl'),
  },
  {
    name: 'media',
    label: i18n('entities.song.fields.media'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.song.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.song.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
