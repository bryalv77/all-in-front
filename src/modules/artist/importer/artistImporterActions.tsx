import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/artist/importer/artistImporterSelectors';
import ArtistService from '../../../modules/artist/artistService';
import fields from '../../../modules/artist/importer/artistImporterFields';
import { i18n } from '../../../i18n';

const artistImporterActions = importerActions(
  'ARTIST_IMPORTER',
  selectors,
  ArtistService.import,
  fields,
  i18n('entities.artist.importer.fileName'),
);

export default artistImporterActions;
