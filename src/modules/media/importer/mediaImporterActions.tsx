import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/media/importer/mediaImporterSelectors';
import MediaService from 'src/modules/media/mediaService';
import fields from 'src/modules/media/importer/mediaImporterFields';
import { i18n } from 'src/i18n';

const mediaImporterActions = importerActions(
  'MEDIA_IMPORTER',
  selectors,
  MediaService.import,
  fields,
  i18n('entities.media.importer.fileName'),
);

export default mediaImporterActions;