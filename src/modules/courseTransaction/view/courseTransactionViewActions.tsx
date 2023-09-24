import CourseTransactionService from 'src/modules/courseTransaction/courseTransactionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSETRANSACTION_VIEW';

const courseTransactionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseTransactionViewActions.FIND_STARTED,
      });

      const record = await CourseTransactionService.find(id);

      dispatch({
        type: courseTransactionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseTransactionViewActions.FIND_ERROR,
      });

      getHistory().push('/course-transaction');
    }
  },
};

export default courseTransactionViewActions;
