import PlaylistSongService from 'src/modules/playlistSong/playlistSongService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLAYLISTSONG_VIEW';

const playlistSongViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: playlistSongViewActions.FIND_STARTED,
      });

      const record = await PlaylistSongService.find(id);

      dispatch({
        type: playlistSongViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistSongViewActions.FIND_ERROR,
      });

      getHistory().push('/playlist-song');
    }
  },
};

export default playlistSongViewActions;
