import listActions from '../../../modules/availabilityTimeslot/list/availabilityTimeslotListActions';
import AvailabilityTimeslotService from '../../../modules/availabilityTimeslot/availabilityTimeslotService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'AVAILABILITYTIMESLOT_DESTROY';

const availabilityTimeslotDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_STARTED,
      });

      await AvailabilityTimeslotService.destroyAll([id]);

      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n(
          'entities.availabilityTimeslot.destroy.success',
        ),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/availability-timeslot');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_ALL_STARTED,
      });

      await AvailabilityTimeslotService.destroyAll(ids);

      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n(
          'entities.availabilityTimeslot.destroyAll.success',
        ),
      );

      getHistory().push('/availability-timeslot');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: availabilityTimeslotDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default availabilityTimeslotDestroyActions;
