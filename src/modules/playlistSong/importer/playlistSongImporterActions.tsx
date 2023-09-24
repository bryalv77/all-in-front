import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/playlistSong/importer/playlistSongImporterSelectors';
import PlaylistSongService from 'src/modules/playlistSong/playlistSongService';
import fields from 'src/modules/playlistSong/importer/playlistSongImporterFields';
import { i18n } from 'src/i18n';

const playlistSongImporterActions = importerActions(
  'PLAYLISTSONG_IMPORTER',
  selectors,
  PlaylistSongService.import,
  fields,
  i18n('entities.playlistSong.importer.fileName'),
);

export default playlistSongImporterActions;