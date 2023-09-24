import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/album/importer/albumImporterSelectors';
import AlbumService from 'src/modules/album/albumService';
import fields from 'src/modules/album/importer/albumImporterFields';
import { i18n } from 'src/i18n';

const albumImporterActions = importerActions(
  'ALBUM_IMPORTER',
  selectors,
  AlbumService.import,
  fields,
  i18n('entities.album.importer.fileName'),
);

export default albumImporterActions;