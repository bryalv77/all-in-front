import listActions from '../../../modules/postHashtag/list/postHashtagListActions';
import PostHashtagService from '../../../modules/postHashtag/postHashtagService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'POSTHASHTAG_DESTROY';

const postHashtagDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postHashtagDestroyActions.DESTROY_STARTED,
      });

      await PostHashtagService.destroyAll([id]);

      dispatch({
        type: postHashtagDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.postHashtag.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/post-hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postHashtagDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: postHashtagDestroyActions.DESTROY_ALL_STARTED,
      });

      await PostHashtagService.destroyAll(ids);

      dispatch({
        type: postHashtagDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.postHashtag.destroyAll.success'),
      );

      getHistory().push('/post-hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postHashtagDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default postHashtagDestroyActions;
