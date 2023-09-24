import AlbumService from '../../../modules/album/albumService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'ALBUM_VIEW';

const albumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: albumViewActions.FIND_STARTED,
      });

      const record = await AlbumService.find(id);

      dispatch({
        type: albumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: albumViewActions.FIND_ERROR,
      });

      getHistory().push('/album');
    }
  },
};

export default albumViewActions;
