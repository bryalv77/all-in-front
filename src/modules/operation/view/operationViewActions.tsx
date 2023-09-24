import OperationService from 'src/modules/operation/operationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'OPERATION_VIEW';

const operationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: operationViewActions.FIND_STARTED,
      });

      const record = await OperationService.find(id);

      dispatch({
        type: operationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: operationViewActions.FIND_ERROR,
      });

      getHistory().push('/operation');
    }
  },
};

export default operationViewActions;
