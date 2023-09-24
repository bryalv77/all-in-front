import PaymentMethodsService from '../../../modules/paymentMethods/paymentMethodsService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'PAYMENTMETHODS_VIEW';

const paymentMethodsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: paymentMethodsViewActions.FIND_STARTED,
      });

      const record = await PaymentMethodsService.find(id);

      dispatch({
        type: paymentMethodsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentMethodsViewActions.FIND_ERROR,
      });

      getHistory().push('/payment-methods');
    }
  },
};

export default paymentMethodsViewActions;
