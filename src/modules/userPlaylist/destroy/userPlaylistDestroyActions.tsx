import listActions from '../../../modules/userPlaylist/list/userPlaylistListActions';
import UserPlaylistService from '../../../modules/userPlaylist/userPlaylistService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'USERPLAYLIST_DESTROY';

const userPlaylistDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userPlaylistDestroyActions.DESTROY_STARTED,
      });

      await UserPlaylistService.destroyAll([id]);

      dispatch({
        type: userPlaylistDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.userPlaylist.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/user-playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userPlaylistDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: userPlaylistDestroyActions.DESTROY_ALL_STARTED,
      });

      await UserPlaylistService.destroyAll(ids);

      dispatch({
        type: userPlaylistDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.userPlaylist.destroyAll.success'),
      );

      getHistory().push('/user-playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userPlaylistDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default userPlaylistDestroyActions;
