import DeliveryMethodService from 'src/modules/deliveryMethod/deliveryMethodService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DELIVERYMETHOD_FORM';

const deliveryMethodFormActions = {
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
        type: deliveryMethodFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DeliveryMethodService.find(id);
      }

      dispatch({
        type: deliveryMethodFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deliveryMethodFormActions.INIT_ERROR,
      });

      getHistory().push('/delivery-method');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: deliveryMethodFormActions.CREATE_STARTED,
      });

      await DeliveryMethodService.create(values);

      dispatch({
        type: deliveryMethodFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deliveryMethod.create.success'),
      );

      getHistory().push('/delivery-method');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deliveryMethodFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: deliveryMethodFormActions.UPDATE_STARTED,
      });

      await DeliveryMethodService.update(id, values);

      dispatch({
        type: deliveryMethodFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deliveryMethod.update.success'),
      );

      getHistory().push('/delivery-method');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deliveryMethodFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default deliveryMethodFormActions;
