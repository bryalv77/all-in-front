import listActions from '../../../modules/playlist/list/playlistListActions';
import PlaylistService from '../../../modules/playlist/playlistService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'PLAYLIST_DESTROY';

const playlistDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: playlistDestroyActions.DESTROY_STARTED,
      });

      await PlaylistService.destroyAll([id]);

      dispatch({
        type: playlistDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.playlist.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: playlistDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: playlistDestroyActions.DESTROY_ALL_STARTED,
      });

      await PlaylistService.destroyAll(ids);

      dispatch({
        type: playlistDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.playlist.destroyAll.success'),
      );

      getHistory().push('/playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: playlistDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default playlistDestroyActions;
