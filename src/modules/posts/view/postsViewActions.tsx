import PostsService from 'src/modules/posts/postsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'POSTS_VIEW';

const postsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postsViewActions.FIND_STARTED,
      });

      const record = await PostsService.find(id);

      dispatch({
        type: postsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postsViewActions.FIND_ERROR,
      });

      getHistory().push('/posts');
    }
  },
};

export default postsViewActions;
