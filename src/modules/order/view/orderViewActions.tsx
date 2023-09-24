import OrderService from '../../../modules/order/orderService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'ORDER_VIEW';

const orderViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: orderViewActions.FIND_STARTED,
      });

      const record = await OrderService.find(id);

      dispatch({
        type: orderViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: orderViewActions.FIND_ERROR,
      });

      getHistory().push('/order');
    }
  },
};

export default orderViewActions;
