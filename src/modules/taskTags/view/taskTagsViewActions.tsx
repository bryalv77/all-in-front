import TaskTagsService from 'src/modules/taskTags/taskTagsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TASKTAGS_VIEW';

const taskTagsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: taskTagsViewActions.FIND_STARTED,
      });

      const record = await TaskTagsService.find(id);

      dispatch({
        type: taskTagsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: taskTagsViewActions.FIND_ERROR,
      });

      getHistory().push('/task-tags');
    }
  },
};

export default taskTagsViewActions;
