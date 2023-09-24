import listActions from '../../../modules/artist/list/artistListActions';
import ArtistService from '../../../modules/artist/artistService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'ARTIST_DESTROY';

const artistDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: artistDestroyActions.DESTROY_STARTED,
      });

      await ArtistService.destroyAll([id]);

      dispatch({
        type: artistDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.artist.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/artist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: artistDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: artistDestroyActions.DESTROY_ALL_STARTED,
      });

      await ArtistService.destroyAll(ids);

      dispatch({
        type: artistDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.artist.destroyAll.success'),
      );

      getHistory().push('/artist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: artistDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default artistDestroyActions;
