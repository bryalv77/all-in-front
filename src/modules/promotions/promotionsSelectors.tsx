import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import Permissions from 'src/security/permissions';

const selectPermissionToRead = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.promotionsRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.promotionsEdit,
    ),
);

const selectPermissionToCreate = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.promotionsCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.promotionsImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.promotionsDestroy,
    ),
);

const promotionsSelectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
};

export default promotionsSelectors;
