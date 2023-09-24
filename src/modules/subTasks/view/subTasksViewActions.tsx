import SubTasksService from '../../../modules/subTasks/subTasksService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'SUBTASKS_VIEW';

const subTasksViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subTasksViewActions.FIND_STARTED,
      });

      const record = await SubTasksService.find(id);

      dispatch({
        type: subTasksViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subTasksViewActions.FIND_ERROR,
      });

      getHistory().push('/sub-tasks');
    }
  },
};

export default subTasksViewActions;
