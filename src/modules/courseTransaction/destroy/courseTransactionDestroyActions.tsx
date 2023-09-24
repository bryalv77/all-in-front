import listActions from 'src/modules/courseTransaction/list/courseTransactionListActions';
import CourseTransactionService from 'src/modules/courseTransaction/courseTransactionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSETRANSACTION_DESTROY';

const courseTransactionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseTransactionDestroyActions.DESTROY_STARTED,
      });

      await CourseTransactionService.destroyAll([id]);

      dispatch({
        type: courseTransactionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseTransaction.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-transaction');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseTransactionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseTransactionDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseTransactionService.destroyAll(ids);

      dispatch({
        type: courseTransactionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseTransaction.destroyAll.success'),
      );

      getHistory().push('/course-transaction');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseTransactionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseTransactionDestroyActions;
