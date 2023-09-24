import AvailabilityTimeslotService from '../../../modules/availabilityTimeslot/availabilityTimeslotService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'AVAILABILITYTIMESLOT_VIEW';

const availabilityTimeslotViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: availabilityTimeslotViewActions.FIND_STARTED,
      });

      const record = await AvailabilityTimeslotService.find(
        id,
      );

      dispatch({
        type: availabilityTimeslotViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: availabilityTimeslotViewActions.FIND_ERROR,
      });

      getHistory().push('/availability-timeslot');
    }
  },
};

export default availabilityTimeslotViewActions;
