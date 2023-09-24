import HashtagService from '../../../modules/hashtag/hashtagService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'HASHTAG_VIEW';

const hashtagViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: hashtagViewActions.FIND_STARTED,
      });

      const record = await HashtagService.find(id);

      dispatch({
        type: hashtagViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: hashtagViewActions.FIND_ERROR,
      });

      getHistory().push('/hashtag');
    }
  },
};

export default hashtagViewActions;
