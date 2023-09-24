import OrderDetailService from 'src/modules/orderDetail/orderDetailService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ORDERDETAIL_VIEW';

const orderDetailViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: orderDetailViewActions.FIND_STARTED,
      });

      const record = await OrderDetailService.find(id);

      dispatch({
        type: orderDetailViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: orderDetailViewActions.FIND_ERROR,
      });

      getHistory().push('/order-detail');
    }
  },
};

export default orderDetailViewActions;
