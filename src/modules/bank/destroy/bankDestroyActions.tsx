import listActions from '../../../modules/bank/list/bankListActions';
import BankService from '../../../modules/bank/bankService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'BANK_DESTROY';

const bankDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bankDestroyActions.DESTROY_STARTED,
      });

      await BankService.destroyAll([id]);

      dispatch({
        type: bankDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.bank.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/bank');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bankDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: bankDestroyActions.DESTROY_ALL_STARTED,
      });

      await BankService.destroyAll(ids);

      dispatch({
        type: bankDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.bank.destroyAll.success'),
      );

      getHistory().push('/bank');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bankDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default bankDestroyActions;
