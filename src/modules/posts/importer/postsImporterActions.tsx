import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/posts/importer/postsImporterSelectors';
import PostsService from '../../../modules/posts/postsService';
import fields from '../../../modules/posts/importer/postsImporterFields';
import { i18n } from '../../../i18n';

const postsImporterActions = importerActions(
  'POSTS_IMPORTER',
  selectors,
  PostsService.import,
  fields,
  i18n('entities.posts.importer.fileName'),
);

export default postsImporterActions;
