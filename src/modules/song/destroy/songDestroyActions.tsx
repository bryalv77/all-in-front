import listActions from '../../../modules/song/list/songListActions';
import SongService from '../../../modules/song/songService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'SONG_DESTROY';

const songDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: songDestroyActions.DESTROY_STARTED,
      });

      await SongService.destroyAll([id]);

      dispatch({
        type: songDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.song.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/song');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: songDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: songDestroyActions.DESTROY_ALL_STARTED,
      });

      await SongService.destroyAll(ids);

      dispatch({
        type: songDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.song.destroyAll.success'),
      );

      getHistory().push('/song');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: songDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default songDestroyActions;
