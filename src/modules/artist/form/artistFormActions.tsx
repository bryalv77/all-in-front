import ArtistService from '../../../modules/artist/artistService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'ARTIST_FORM';

const artistFormActions = {
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
        type: artistFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ArtistService.find(id);
      }

      dispatch({
        type: artistFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artistFormActions.INIT_ERROR,
      });

      getHistory().push('/artist');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: artistFormActions.CREATE_STARTED,
      });

      await ArtistService.create(values);

      dispatch({
        type: artistFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.artist.create.success'),
      );

      getHistory().push('/artist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artistFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: artistFormActions.UPDATE_STARTED,
      });

      await ArtistService.update(id, values);

      dispatch({
        type: artistFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.artist.update.success'),
      );

      getHistory().push('/artist');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artistFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default artistFormActions;
