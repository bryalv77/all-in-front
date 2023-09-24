import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

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
