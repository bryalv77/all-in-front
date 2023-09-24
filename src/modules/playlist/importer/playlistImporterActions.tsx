import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/playlist/importer/playlistImporterSelectors';
import PlaylistService from 'src/modules/playlist/playlistService';
import fields from 'src/modules/playlist/importer/playlistImporterFields';
import { i18n } from 'src/i18n';

const playlistImporterActions = importerActions(
  'PLAYLIST_IMPORTER',
  selectors,
  PlaylistService.import,
  fields,
  i18n('entities.playlist.importer.fileName'),
);

export default playlistImporterActions;