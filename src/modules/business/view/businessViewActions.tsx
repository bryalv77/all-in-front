import BusinessService from '../../../modules/business/businessService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'BUSINESS_VIEW';

const businessViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessViewActions.FIND_STARTED,
      });

      const record = await BusinessService.find(id);

      dispatch({
        type: businessViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessViewActions.FIND_ERROR,
      });

      getHistory().push('/business');
    }
  },
};

export default businessViewActions;
