import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/user/importer/userImporterSelectors';
import UserService from '../../../modules/user/userService';
import fields from '../../../modules/user/importer/userImporterFields';
import { i18n } from '../../../i18n';

const userImporterActions = importerActions(
  'USER_IMPORTER',
  selectors,
  UserService.import,
  fields,
  i18n('user.importer.fileName'),
);

export default userImporterActions;
