import FollowersService from 'src/modules/followers/followersService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FOLLOWERS_VIEW';

const followersViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: followersViewActions.FIND_STARTED,
      });

      const record = await FollowersService.find(id);

      dispatch({
        type: followersViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: followersViewActions.FIND_ERROR,
      });

      getHistory().push('/followers');
    }
  },
};

export default followersViewActions;
