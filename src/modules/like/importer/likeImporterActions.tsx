import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/like/importer/likeImporterSelectors';
import LikeService from 'src/modules/like/likeService';
import fields from 'src/modules/like/importer/likeImporterFields';
import { i18n } from 'src/i18n';

const likeImporterActions = importerActions(
  'LIKE_IMPORTER',
  selectors,
  LikeService.import,
  fields,
  i18n('entities.like.importer.fileName'),
);

export default likeImporterActions;