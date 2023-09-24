import listActions from 'src/modules/hashtag/list/hashtagListActions';
import HashtagService from 'src/modules/hashtag/hashtagService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'HASHTAG_DESTROY';

const hashtagDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: hashtagDestroyActions.DESTROY_STARTED,
      });

      await HashtagService.destroyAll([id]);

      dispatch({
        type: hashtagDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.hashtag.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: hashtagDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: hashtagDestroyActions.DESTROY_ALL_STARTED,
      });

      await HashtagService.destroyAll(ids);

      dispatch({
        type: hashtagDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.hashtag.destroyAll.success'),
      );

      getHistory().push('/hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: hashtagDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default hashtagDestroyActions;
