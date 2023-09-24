import PlaylistService from '../../../modules/playlist/playlistService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'PLAYLIST_FORM';

const playlistFormActions = {
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
        type: playlistFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlaylistService.find(id);
      }

      dispatch({
        type: playlistFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistFormActions.INIT_ERROR,
      });

      getHistory().push('/playlist');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: playlistFormActions.CREATE_STARTED,
      });

      await PlaylistService.create(values);

      dispatch({
        type: playlistFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.playlist.create.success'),
      );

      getHistory().push('/playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: playlistFormActions.UPDATE_STARTED,
      });

      await PlaylistService.update(id, values);

      dispatch({
        type: playlistFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.playlist.update.success'),
      );

      getHistory().push('/playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default playlistFormActions;
