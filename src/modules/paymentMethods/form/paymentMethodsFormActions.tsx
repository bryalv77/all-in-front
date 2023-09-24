import PaymentMethodsService from 'src/modules/paymentMethods/paymentMethodsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PAYMENTMETHODS_FORM';

const paymentMethodsFormActions = {
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
        type: paymentMethodsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PaymentMethodsService.find(id);
      }

      dispatch({
        type: paymentMethodsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentMethodsFormActions.INIT_ERROR,
      });

      getHistory().push('/payment-methods');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: paymentMethodsFormActions.CREATE_STARTED,
      });

      await PaymentMethodsService.create(values);

      dispatch({
        type: paymentMethodsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentMethods.create.success'),
      );

      getHistory().push('/payment-methods');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentMethodsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: paymentMethodsFormActions.UPDATE_STARTED,
      });

      await PaymentMethodsService.update(id, values);

      dispatch({
        type: paymentMethodsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentMethods.update.success'),
      );

      getHistory().push('/payment-methods');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentMethodsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default paymentMethodsFormActions;
