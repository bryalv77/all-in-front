import UserPlaylistService from '../../../modules/userPlaylist/userPlaylistService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'USERPLAYLIST_VIEW';

const userPlaylistViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userPlaylistViewActions.FIND_STARTED,
      });

      const record = await UserPlaylistService.find(id);

      dispatch({
        type: userPlaylistViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userPlaylistViewActions.FIND_ERROR,
      });

      getHistory().push('/user-playlist');
    }
  },
};

export default userPlaylistViewActions;
