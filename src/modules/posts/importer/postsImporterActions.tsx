import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/posts/importer/postsImporterSelectors';
import PostsService from 'src/modules/posts/postsService';
import fields from 'src/modules/posts/importer/postsImporterFields';
import { i18n } from 'src/i18n';

const postsImporterActions = importerActions(
  'POSTS_IMPORTER',
  selectors,
  PostsService.import,
  fields,
  i18n('entities.posts.importer.fileName'),
);

export default postsImporterActions;