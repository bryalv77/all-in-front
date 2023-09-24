import PlaylistService from 'src/modules/playlist/playlistService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLAYLIST_VIEW';

const playlistViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: playlistViewActions.FIND_STARTED,
      });

      const record = await PlaylistService.find(id);

      dispatch({
        type: playlistViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistViewActions.FIND_ERROR,
      });

      getHistory().push('/playlist');
    }
  },
};

export default playlistViewActions;
