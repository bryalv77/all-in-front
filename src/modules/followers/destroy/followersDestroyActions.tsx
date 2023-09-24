import listActions from 'src/modules/followers/list/followersListActions';
import FollowersService from 'src/modules/followers/followersService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FOLLOWERS_DESTROY';

const followersDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: followersDestroyActions.DESTROY_STARTED,
      });

      await FollowersService.destroyAll([id]);

      dispatch({
        type: followersDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.followers.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/followers');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: followersDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: followersDestroyActions.DESTROY_ALL_STARTED,
      });

      await FollowersService.destroyAll(ids);

      dispatch({
        type: followersDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.followers.destroyAll.success'),
      );

      getHistory().push('/followers');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: followersDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default followersDestroyActions;
