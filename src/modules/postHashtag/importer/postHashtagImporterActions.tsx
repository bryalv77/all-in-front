import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/postHashtag/importer/postHashtagImporterSelectors';
import PostHashtagService from 'src/modules/postHashtag/postHashtagService';
import fields from 'src/modules/postHashtag/importer/postHashtagImporterFields';
import { i18n } from 'src/i18n';

const postHashtagImporterActions = importerActions(
  'POSTHASHTAG_IMPORTER',
  selectors,
  PostHashtagService.import,
  fields,
  i18n('entities.postHashtag.importer.fileName'),
);

export default postHashtagImporterActions;