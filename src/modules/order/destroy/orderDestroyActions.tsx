import listActions from '../../../modules/order/list/orderListActions';
import OrderService from '../../../modules/order/orderService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'ORDER_DESTROY';

const orderDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: orderDestroyActions.DESTROY_STARTED,
      });

      await OrderService.destroyAll([id]);

      dispatch({
        type: orderDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.order.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: orderDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: orderDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrderService.destroyAll(ids);

      dispatch({
        type: orderDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.order.destroyAll.success'),
      );

      getHistory().push('/order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: orderDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default orderDestroyActions;
