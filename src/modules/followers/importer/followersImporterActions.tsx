import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/followers/importer/followersImporterSelectors';
import FollowersService from 'src/modules/followers/followersService';
import fields from 'src/modules/followers/importer/followersImporterFields';
import { i18n } from 'src/i18n';

const followersImporterActions = importerActions(
  'FOLLOWERS_IMPORTER',
  selectors,
  FollowersService.import,
  fields,
  i18n('entities.followers.importer.fileName'),
);

export default followersImporterActions;