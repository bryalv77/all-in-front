import CourseTransactionService from '../../../modules/courseTransaction/courseTransactionService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'COURSETRANSACTION_FORM';

const courseTransactionFormActions = {
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
        type: courseTransactionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseTransactionService.find(id);
      }

      dispatch({
        type: courseTransactionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseTransactionFormActions.INIT_ERROR,
      });

      getHistory().push('/course-transaction');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseTransactionFormActions.CREATE_STARTED,
      });

      await CourseTransactionService.create(values);

      dispatch({
        type: courseTransactionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseTransaction.create.success'),
      );

      getHistory().push('/course-transaction');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseTransactionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseTransactionFormActions.UPDATE_STARTED,
      });

      await CourseTransactionService.update(id, values);

      dispatch({
        type: courseTransactionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseTransaction.update.success'),
      );

      getHistory().push('/course-transaction');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseTransactionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseTransactionFormActions;
