import BankService from 'src/modules/bank/bankService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BANK_FORM';

const bankFormActions = {
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
        type: bankFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BankService.find(id);
      }

      dispatch({
        type: bankFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bankFormActions.INIT_ERROR,
      });

      getHistory().push('/bank');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: bankFormActions.CREATE_STARTED,
      });

      await BankService.create(values);

      dispatch({
        type: bankFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.bank.create.success'),
      );

      getHistory().push('/bank');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bankFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: bankFormActions.UPDATE_STARTED,
      });

      await BankService.update(id, values);

      dispatch({
        type: bankFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.bank.update.success'),
      );

      getHistory().push('/bank');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bankFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default bankFormActions;
