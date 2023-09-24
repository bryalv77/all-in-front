import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/hashtag/importer/hashtagImporterSelectors';
import HashtagService from 'src/modules/hashtag/hashtagService';
import fields from 'src/modules/hashtag/importer/hashtagImporterFields';
import { i18n } from 'src/i18n';

const hashtagImporterActions = importerActions(
  'HASHTAG_IMPORTER',
  selectors,
  HashtagService.import,
  fields,
  i18n('entities.hashtag.importer.fileName'),
);

export default hashtagImporterActions;