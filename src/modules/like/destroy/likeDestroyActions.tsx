import listActions from '../../../modules/like/list/likeListActions';
import LikeService from '../../../modules/like/likeService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'LIKE_DESTROY';

const likeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: likeDestroyActions.DESTROY_STARTED,
      });

      await LikeService.destroyAll([id]);

      dispatch({
        type: likeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.like.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/like');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: likeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: likeDestroyActions.DESTROY_ALL_STARTED,
      });

      await LikeService.destroyAll(ids);

      dispatch({
        type: likeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.like.destroyAll.success'),
      );

      getHistory().push('/like');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: likeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default likeDestroyActions;
