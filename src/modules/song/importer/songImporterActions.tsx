import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/song/importer/songImporterSelectors';
import SongService from 'src/modules/song/songService';
import fields from 'src/modules/song/importer/songImporterFields';
import { i18n } from 'src/i18n';

const songImporterActions = importerActions(
  'SONG_IMPORTER',
  selectors,
  SongService.import,
  fields,
  i18n('entities.song.importer.fileName'),
);

export default songImporterActions;