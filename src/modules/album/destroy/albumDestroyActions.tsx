import listActions from '../../../modules/album/list/albumListActions';
import AlbumService from '../../../modules/album/albumService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'ALBUM_DESTROY';

const albumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: albumDestroyActions.DESTROY_STARTED,
      });

      await AlbumService.destroyAll([id]);

      dispatch({
        type: albumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.album.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/album');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: albumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: albumDestroyActions.DESTROY_ALL_STARTED,
      });

      await AlbumService.destroyAll(ids);

      dispatch({
        type: albumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.album.destroyAll.success'),
      );

      getHistory().push('/album');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: albumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default albumDestroyActions;
