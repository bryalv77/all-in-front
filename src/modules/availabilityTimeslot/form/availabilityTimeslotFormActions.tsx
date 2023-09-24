import AvailabilityTimeslotService from 'src/modules/availabilityTimeslot/availabilityTimeslotService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'AVAILABILITYTIMESLOT_FORM';

const availabilityTimeslotFormActions = {
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
        type: availabilityTimeslotFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AvailabilityTimeslotService.find(id);
      }

      dispatch({
        type: availabilityTimeslotFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: availabilityTimeslotFormActions.INIT_ERROR,
      });

      getHistory().push('/availability-timeslot');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: availabilityTimeslotFormActions.CREATE_STARTED,
      });

      await AvailabilityTimeslotService.create(values);

      dispatch({
        type: availabilityTimeslotFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.availabilityTimeslot.create.success'),
      );

      getHistory().push('/availability-timeslot');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: availabilityTimeslotFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: availabilityTimeslotFormActions.UPDATE_STARTED,
      });

      await AvailabilityTimeslotService.update(id, values);

      dispatch({
        type: availabilityTimeslotFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.availabilityTimeslot.update.success'),
      );

      getHistory().push('/availability-timeslot');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: availabilityTimeslotFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default availabilityTimeslotFormActions;
