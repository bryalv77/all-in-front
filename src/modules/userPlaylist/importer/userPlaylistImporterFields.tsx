import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.userPlaylist.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.userPlaylist.fields.userId'),
      {},
    ),
  },
  {
    name: 'playlistId',
    label: i18n('entities.userPlaylist.fields.playlistId'),
    schema: schemas.relationToOne(
      i18n('entities.userPlaylist.fields.playlistId'),
      {},
    ),
  },
];