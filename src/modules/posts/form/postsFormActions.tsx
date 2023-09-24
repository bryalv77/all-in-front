import PostsService from 'src/modules/posts/postsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'POSTS_FORM';

const postsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PostsService.find(id);
      }

      dispatch({
        type: postsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postsFormActions.INIT_ERROR,
      });

      getHistory().push('/posts');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: postsFormActions.CREATE_STARTED,
      });

      await PostsService.create(values);

      dispatch({
        type: postsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.posts.create.success'),
      );

      getHistory().push('/posts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: postsFormActions.UPDATE_STARTED,
      });

      await PostsService.update(id, values);

      dispatch({
        type: postsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.posts.update.success'),
      );

      getHistory().push('/posts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default postsFormActions;
