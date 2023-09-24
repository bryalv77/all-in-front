import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/artist/importer/artistImporterSelectors';
import ArtistService from 'src/modules/artist/artistService';
import fields from 'src/modules/artist/importer/artistImporterFields';
import { i18n } from 'src/i18n';

const artistImporterActions = importerActions(
  'ARTIST_IMPORTER',
  selectors,
  ArtistService.import,
  fields,
  i18n('entities.artist.importer.fileName'),
);

export default artistImporterActions;