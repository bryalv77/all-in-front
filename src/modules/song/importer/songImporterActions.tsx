import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/song/importer/songImporterSelectors';
import SongService from '../../../modules/song/songService';
import fields from '../../../modules/song/importer/songImporterFields';
import { i18n } from '../../../i18n';

const songImporterActions = importerActions(
  'SONG_IMPORTER',
  selectors,
  SongService.import,
  fields,
  i18n('entities.song.importer.fileName'),
);

export default songImporterActions;
