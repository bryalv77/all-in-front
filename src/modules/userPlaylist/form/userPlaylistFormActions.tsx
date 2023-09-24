import UserPlaylistService from 'src/modules/userPlaylist/userPlaylistService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'USERPLAYLIST_FORM';

const userPlaylistFormActions = {
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
        type: userPlaylistFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await UserPlaylistService.find(id);
      }

      dispatch({
        type: userPlaylistFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userPlaylistFormActions.INIT_ERROR,
      });

      getHistory().push('/user-playlist');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: userPlaylistFormActions.CREATE_STARTED,
      });

      await UserPlaylistService.create(values);

      dispatch({
        type: userPlaylistFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.userPlaylist.create.success'),
      );

      getHistory().push('/user-playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userPlaylistFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: userPlaylistFormActions.UPDATE_STARTED,
      });

      await UserPlaylistService.update(id, values);

      dispatch({
        type: userPlaylistFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.userPlaylist.update.success'),
      );

      getHistory().push('/user-playlist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userPlaylistFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default userPlaylistFormActions;
