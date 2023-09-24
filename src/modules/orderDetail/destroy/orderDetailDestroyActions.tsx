import listActions from 'src/modules/orderDetail/list/orderDetailListActions';
import OrderDetailService from 'src/modules/orderDetail/orderDetailService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ORDERDETAIL_DESTROY';

const orderDetailDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: orderDetailDestroyActions.DESTROY_STARTED,
      });

      await OrderDetailService.destroyAll([id]);

      dispatch({
        type: orderDetailDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.orderDetail.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/order-detail');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: orderDetailDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: orderDetailDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrderDetailService.destroyAll(ids);

      dispatch({
        type: orderDetailDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.orderDetail.destroyAll.success'),
      );

      getHistory().push('/order-detail');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: orderDetailDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default orderDetailDestroyActions;
