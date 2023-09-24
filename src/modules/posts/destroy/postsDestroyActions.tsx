import listActions from '../../../modules/posts/list/postsListActions';
import PostsService from '../../../modules/posts/postsService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'POSTS_DESTROY';

const postsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postsDestroyActions.DESTROY_STARTED,
      });

      await PostsService.destroyAll([id]);

      dispatch({
        type: postsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.posts.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/posts');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: postsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PostsService.destroyAll(ids);

      dispatch({
        type: postsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.posts.destroyAll.success'),
      );

      getHistory().push('/posts');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default postsDestroyActions;
