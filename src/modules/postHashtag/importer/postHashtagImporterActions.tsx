import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/postHashtag/importer/postHashtagImporterSelectors';
import PostHashtagService from '../../../modules/postHashtag/postHashtagService';
import fields from '../../../modules/postHashtag/importer/postHashtagImporterFields';
import { i18n } from '../../../i18n';

const postHashtagImporterActions = importerActions(
  'POSTHASHTAG_IMPORTER',
  selectors,
  PostHashtagService.import,
  fields,
  i18n('entities.postHashtag.importer.fileName'),
);

export default postHashtagImporterActions;
