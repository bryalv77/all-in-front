import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'playlistId',
    label: i18n('entities.playlistSong.fields.playlistId'),
    schema: schemas.relationToOne(
      i18n('entities.playlistSong.fields.playlistId'),
      {},
    ),
  },
  {
    name: 'songId',
    label: i18n('entities.playlistSong.fields.songId'),
    schema: schemas.relationToOne(
      i18n('entities.playlistSong.fields.songId'),
      {},
    ),
  },
  {
    name: 'trackOrder',
    label: i18n('entities.playlistSong.fields.trackOrder'),
    schema: schemas.integer(
      i18n('entities.playlistSong.fields.trackOrder'),
      {},
    ),
  },
];