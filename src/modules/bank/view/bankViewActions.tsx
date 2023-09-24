import BankService from '../../../modules/bank/bankService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'BANK_VIEW';

const bankViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bankViewActions.FIND_STARTED,
      });

      const record = await BankService.find(id);

      dispatch({
        type: bankViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bankViewActions.FIND_ERROR,
      });

      getHistory().push('/bank');
    }
  },
};

export default bankViewActions;
