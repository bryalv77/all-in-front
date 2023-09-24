import CityService from '../../../modules/city/cityService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'CITY_FORM';

const cityFormActions = {
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
        type: cityFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CityService.find(id);
      }

      dispatch({
        type: cityFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cityFormActions.INIT_ERROR,
      });

      getHistory().push('/city');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: cityFormActions.CREATE_STARTED,
      });

      await CityService.create(values);

      dispatch({
        type: cityFormActions.CREATE_SUCCESS,
      });

      Message.success(i18n('entities.city.create.success'));

      getHistory().push('/city');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cityFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: cityFormActions.UPDATE_STARTED,
      });

      await CityService.update(id, values);

      dispatch({
        type: cityFormActions.UPDATE_SUCCESS,
      });

      Message.success(i18n('entities.city.update.success'));

      getHistory().push('/city');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cityFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default cityFormActions;
