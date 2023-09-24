import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/like/importer/likeImporterSelectors';
import LikeService from '../../../modules/like/likeService';
import fields from '../../../modules/like/importer/likeImporterFields';
import { i18n } from '../../../i18n';

const likeImporterActions = importerActions(
  'LIKE_IMPORTER',
  selectors,
  LikeService.import,
  fields,
  i18n('entities.like.importer.fileName'),
);

export default likeImporterActions;
