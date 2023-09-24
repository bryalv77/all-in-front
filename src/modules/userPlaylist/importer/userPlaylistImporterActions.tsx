import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/userPlaylist/importer/userPlaylistImporterSelectors';
import UserPlaylistService from 'src/modules/userPlaylist/userPlaylistService';
import fields from 'src/modules/userPlaylist/importer/userPlaylistImporterFields';
import { i18n } from 'src/i18n';

const userPlaylistImporterActions = importerActions(
  'USERPLAYLIST_IMPORTER',
  selectors,
  UserPlaylistService.import,
  fields,
  i18n('entities.userPlaylist.importer.fileName'),
);

export default userPlaylistImporterActions;