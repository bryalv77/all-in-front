import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/followers/importer/followersImporterSelectors';
import FollowersService from '../../../modules/followers/followersService';
import fields from '../../../modules/followers/importer/followersImporterFields';
import { i18n } from '../../../i18n';

const followersImporterActions = importerActions(
  'FOLLOWERS_IMPORTER',
  selectors,
  FollowersService.import,
  fields,
  i18n('entities.followers.importer.fileName'),
);

export default followersImporterActions;
