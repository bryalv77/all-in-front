import PostHashtagService from 'src/modules/postHashtag/postHashtagService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'POSTHASHTAG_VIEW';

const postHashtagViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postHashtagViewActions.FIND_STARTED,
      });

      const record = await PostHashtagService.find(id);

      dispatch({
        type: postHashtagViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postHashtagViewActions.FIND_ERROR,
      });

      getHistory().push('/post-hashtag');
    }
  },
};

export default postHashtagViewActions;
