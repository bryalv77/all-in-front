import listActions from '../../../modules/operation/list/operationListActions';
import OperationService from '../../../modules/operation/operationService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'OPERATION_DESTROY';

const operationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: operationDestroyActions.DESTROY_STARTED,
      });

      await OperationService.destroyAll([id]);

      dispatch({
        type: operationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.operation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/operation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: operationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: operationDestroyActions.DESTROY_ALL_STARTED,
      });

      await OperationService.destroyAll(ids);

      dispatch({
        type: operationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.operation.destroyAll.success'),
      );

      getHistory().push('/operation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: operationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default operationDestroyActions;
