import DeliveryMethodService from '../../../modules/deliveryMethod/deliveryMethodService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'DELIVERYMETHOD_VIEW';

const deliveryMethodViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deliveryMethodViewActions.FIND_STARTED,
      });

      const record = await DeliveryMethodService.find(id);

      dispatch({
        type: deliveryMethodViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deliveryMethodViewActions.FIND_ERROR,
      });

      getHistory().push('/delivery-method');
    }
  },
};

export default deliveryMethodViewActions;
