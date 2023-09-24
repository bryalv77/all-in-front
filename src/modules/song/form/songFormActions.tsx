import SongService from 'src/modules/song/songService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SONG_FORM';

const songFormActions = {
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
        type: songFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SongService.find(id);
      }

      dispatch({
        type: songFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: songFormActions.INIT_ERROR,
      });

      getHistory().push('/song');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: songFormActions.CREATE_STARTED,
      });

      await SongService.create(values);

      dispatch({
        type: songFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.song.create.success'),
      );

      getHistory().push('/song');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: songFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: songFormActions.UPDATE_STARTED,
      });

      await SongService.update(id, values);

      dispatch({
        type: songFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.song.update.success'),
      );

      getHistory().push('/song');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: songFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default songFormActions;
