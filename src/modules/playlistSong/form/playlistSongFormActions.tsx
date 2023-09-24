import PlaylistSongService from '../../../modules/playlistSong/playlistSongService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'PLAYLISTSONG_FORM';

const playlistSongFormActions = {
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
        type: playlistSongFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlaylistSongService.find(id);
      }

      dispatch({
        type: playlistSongFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistSongFormActions.INIT_ERROR,
      });

      getHistory().push('/playlist-song');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: playlistSongFormActions.CREATE_STARTED,
      });

      await PlaylistSongService.create(values);

      dispatch({
        type: playlistSongFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.playlistSong.create.success'),
      );

      getHistory().push('/playlist-song');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistSongFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: playlistSongFormActions.UPDATE_STARTED,
      });

      await PlaylistSongService.update(id, values);

      dispatch({
        type: playlistSongFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.playlistSong.update.success'),
      );

      getHistory().push('/playlist-song');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistSongFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default playlistSongFormActions;
