import listActions from '../../../modules/tasks/list/tasksListActions';
import TasksService from '../../../modules/tasks/tasksService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'TASKS_DESTROY';

const tasksDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tasksDestroyActions.DESTROY_STARTED,
      });

      await TasksService.destroyAll([id]);

      dispatch({
        type: tasksDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.tasks.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tasksDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: tasksDestroyActions.DESTROY_ALL_STARTED,
      });

      await TasksService.destroyAll(ids);

      dispatch({
        type: tasksDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.tasks.destroyAll.success'),
      );

      getHistory().push('/tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tasksDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default tasksDestroyActions;
