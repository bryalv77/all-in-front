import OperationService from '../../../modules/operation/operationService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'OPERATION_FORM';

const operationFormActions = {
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
        type: operationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OperationService.find(id);
      }

      dispatch({
        type: operationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: operationFormActions.INIT_ERROR,
      });

      getHistory().push('/operation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: operationFormActions.CREATE_STARTED,
      });

      await OperationService.create(values);

      dispatch({
        type: operationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.operation.create.success'),
      );

      getHistory().push('/operation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: operationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      Message.success(
        i18n('entities.operation.update.started'),
      );
      dispatch({
        type: operationFormActions.UPDATE_STARTED,
      });

      await OperationService.update(id, values);

      dispatch({
        type: operationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.operation.update.success'),
      );

      getHistory().push('/operation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: operationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default operationFormActions;
