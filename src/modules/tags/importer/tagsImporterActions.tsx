import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/tags/importer/tagsImporterSelectors';
import TagsService from '../../../modules/tags/tagsService';
import fields from '../../../modules/tags/importer/tagsImporterFields';
import { i18n } from '../../../i18n';

const tagsImporterActions = importerActions(
  'TAGS_IMPORTER',
  selectors,
  TagsService.import,
  fields,
  i18n('entities.tags.importer.fileName'),
);

export default tagsImporterActions;
