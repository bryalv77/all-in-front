import MediaService from '../../../modules/media/mediaService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'MEDIA_FORM';

const mediaFormActions = {
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
        type: mediaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MediaService.find(id);
      }

      dispatch({
        type: mediaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mediaFormActions.INIT_ERROR,
      });

      getHistory().push('/media');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: mediaFormActions.CREATE_STARTED,
      });

      await MediaService.create(values);

      dispatch({
        type: mediaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.media.create.success'),
      );

      getHistory().push('/media');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mediaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: mediaFormActions.UPDATE_STARTED,
      });

      await MediaService.update(id, values);

      dispatch({
        type: mediaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.media.update.success'),
      );

      getHistory().push('/media');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mediaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default mediaFormActions;
