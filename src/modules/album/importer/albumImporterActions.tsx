import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/album/importer/albumImporterSelectors';
import AlbumService from '../../../modules/album/albumService';
import fields from '../../../modules/album/importer/albumImporterFields';
import { i18n } from '../../../i18n';

const albumImporterActions = importerActions(
  'ALBUM_IMPORTER',
  selectors,
  AlbumService.import,
  fields,
  i18n('entities.album.importer.fileName'),
);

export default albumImporterActions;
