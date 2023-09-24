import listActions from '../../../modules/deliveryMethod/list/deliveryMethodListActions';
import DeliveryMethodService from '../../../modules/deliveryMethod/deliveryMethodService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'DELIVERYMETHOD_DESTROY';

const deliveryMethodDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_STARTED,
      });

      await DeliveryMethodService.destroyAll([id]);

      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.deliveryMethod.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/delivery-method');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_ALL_STARTED,
      });

      await DeliveryMethodService.destroyAll(ids);

      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.deliveryMethod.destroyAll.success'),
      );

      getHistory().push('/delivery-method');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deliveryMethodDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default deliveryMethodDestroyActions;
