import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/playlist/importer/playlistImporterSelectors';
import PlaylistService from '../../../modules/playlist/playlistService';
import fields from '../../../modules/playlist/importer/playlistImporterFields';
import { i18n } from '../../../i18n';

const playlistImporterActions = importerActions(
  'PLAYLIST_IMPORTER',
  selectors,
  PlaylistService.import,
  fields,
  i18n('entities.playlist.importer.fileName'),
);

export default playlistImporterActions;
