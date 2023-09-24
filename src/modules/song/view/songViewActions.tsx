import SongService from 'src/modules/song/songService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SONG_VIEW';

const songViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: songViewActions.FIND_STARTED,
      });

      const record = await SongService.find(id);

      dispatch({
        type: songViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: songViewActions.FIND_ERROR,
      });

      getHistory().push('/song');
    }
  },
};

export default songViewActions;
