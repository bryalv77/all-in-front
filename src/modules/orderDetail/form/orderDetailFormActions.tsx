import OrderDetailService from '../../../modules/orderDetail/orderDetailService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'ORDERDETAIL_FORM';

const orderDetailFormActions = {
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
        type: orderDetailFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OrderDetailService.find(id);
      }

      dispatch({
        type: orderDetailFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: orderDetailFormActions.INIT_ERROR,
      });

      getHistory().push('/order-detail');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: orderDetailFormActions.CREATE_STARTED,
      });

      await OrderDetailService.create(values);

      dispatch({
        type: orderDetailFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.orderDetail.create.success'),
      );

      getHistory().push('/order-detail');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: orderDetailFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: orderDetailFormActions.UPDATE_STARTED,
      });

      await OrderDetailService.update(id, values);

      dispatch({
        type: orderDetailFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.orderDetail.update.success'),
      );

      getHistory().push('/order-detail');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: orderDetailFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default orderDetailFormActions;
