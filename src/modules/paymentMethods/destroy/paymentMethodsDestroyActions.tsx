import listActions from 'src/modules/paymentMethods/list/paymentMethodsListActions';
import PaymentMethodsService from 'src/modules/paymentMethods/paymentMethodsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PAYMENTMETHODS_DESTROY';

const paymentMethodsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_STARTED,
      });

      await PaymentMethodsService.destroyAll([id]);

      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentMethods.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/payment-methods');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PaymentMethodsService.destroyAll(ids);

      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.paymentMethods.destroyAll.success'),
      );

      getHistory().push('/payment-methods');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: paymentMethodsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default paymentMethodsDestroyActions;
