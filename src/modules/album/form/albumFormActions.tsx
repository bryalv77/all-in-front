import AlbumService from 'src/modules/album/albumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ALBUM_FORM';

const albumFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: albumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AlbumService.find(id);
      }

      dispatch({
        type: albumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: albumFormActions.INIT_ERROR,
      });

      getHistory().push('/album');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: albumFormActions.CREATE_STARTED,
      });

      await AlbumService.create(values);

      dispatch({
        type: albumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.album.create.success'),
      );

      getHistory().push('/album');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: albumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: albumFormActions.UPDATE_STARTED,
      });

      await AlbumService.update(id, values);

      dispatch({
        type: albumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.album.update.success'),
      );

      getHistory().push('/album');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: albumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default albumFormActions;
