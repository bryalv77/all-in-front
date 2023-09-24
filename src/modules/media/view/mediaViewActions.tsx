import MediaService from 'src/modules/media/mediaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDIA_VIEW';

const mediaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mediaViewActions.FIND_STARTED,
      });

      const record = await MediaService.find(id);

      dispatch({
        type: mediaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mediaViewActions.FIND_ERROR,
      });

      getHistory().push('/media');
    }
  },
};

export default mediaViewActions;
