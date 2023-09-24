import TasksService from '../../../modules/tasks/tasksService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'TASKS_VIEW';

const tasksViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tasksViewActions.FIND_STARTED,
      });

      const record = await TasksService.find(id);

      dispatch({
        type: tasksViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tasksViewActions.FIND_ERROR,
      });

      getHistory().push('/tasks');
    }
  },
};

export default tasksViewActions;
