import listActions from 'src/modules/media/list/mediaListActions';
import MediaService from 'src/modules/media/mediaService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDIA_DESTROY';

const mediaDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mediaDestroyActions.DESTROY_STARTED,
      });

      await MediaService.destroyAll([id]);

      dispatch({
        type: mediaDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.media.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/media');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mediaDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: mediaDestroyActions.DESTROY_ALL_STARTED,
      });

      await MediaService.destroyAll(ids);

      dispatch({
        type: mediaDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.media.destroyAll.success'),
      );

      getHistory().push('/media');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mediaDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default mediaDestroyActions;
