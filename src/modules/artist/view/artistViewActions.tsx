import ArtistService from 'src/modules/artist/artistService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ARTIST_VIEW';

const artistViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: artistViewActions.FIND_STARTED,
      });

      const record = await ArtistService.find(id);

      dispatch({
        type: artistViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artistViewActions.FIND_ERROR,
      });

      getHistory().push('/artist');
    }
  },
};

export default artistViewActions;
