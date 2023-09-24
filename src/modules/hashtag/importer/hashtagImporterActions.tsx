import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/hashtag/importer/hashtagImporterSelectors';
import HashtagService from '../../../modules/hashtag/hashtagService';
import fields from '../../../modules/hashtag/importer/hashtagImporterFields';
import { i18n } from '../../../i18n';

const hashtagImporterActions = importerActions(
  'HASHTAG_IMPORTER',
  selectors,
  HashtagService.import,
  fields,
  i18n('entities.hashtag.importer.fileName'),
);

export default hashtagImporterActions;
