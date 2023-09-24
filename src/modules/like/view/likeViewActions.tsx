import LikeService from '../../../modules/like/likeService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'LIKE_VIEW';

const likeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: likeViewActions.FIND_STARTED,
      });

      const record = await LikeService.find(id);

      dispatch({
        type: likeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: likeViewActions.FIND_ERROR,
      });

      getHistory().push('/like');
    }
  },
};

export default likeViewActions;
