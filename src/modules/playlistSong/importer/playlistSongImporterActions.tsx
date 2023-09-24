import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/playlistSong/importer/playlistSongImporterSelectors';
import PlaylistSongService from '../../../modules/playlistSong/playlistSongService';
import fields from '../../../modules/playlistSong/importer/playlistSongImporterFields';
import { i18n } from '../../../i18n';

const playlistSongImporterActions = importerActions(
  'PLAYLISTSONG_IMPORTER',
  selectors,
  PlaylistSongService.import,
  fields,
  i18n('entities.playlistSong.importer.fileName'),
);

export default playlistSongImporterActions;
