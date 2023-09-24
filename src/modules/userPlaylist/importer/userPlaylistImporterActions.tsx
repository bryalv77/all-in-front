import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/userPlaylist/importer/userPlaylistImporterSelectors';
import UserPlaylistService from '../../../modules/userPlaylist/userPlaylistService';
import fields from '../../../modules/userPlaylist/importer/userPlaylistImporterFields';
import { i18n } from '../../../i18n';

const userPlaylistImporterActions = importerActions(
  'USERPLAYLIST_IMPORTER',
  selectors,
  UserPlaylistService.import,
  fields,
  i18n('entities.userPlaylist.importer.fileName'),
);

export default userPlaylistImporterActions;
