import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.album.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.album.fields.title'),
  },
  {
    name: 'artistId',
    label: i18n('entities.album.fields.artistId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'year',
    label: i18n('entities.album.fields.year'),
  },
  {
    name: 'cover',
    label: i18n('entities.album.fields.cover'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.album.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.album.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
