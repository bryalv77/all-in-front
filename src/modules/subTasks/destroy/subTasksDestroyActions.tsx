import listActions from '../../../modules/subTasks/list/subTasksListActions';
import SubTasksService from '../../../modules/subTasks/subTasksService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'SUBTASKS_DESTROY';

const subTasksDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subTasksDestroyActions.DESTROY_STARTED,
      });

      await SubTasksService.destroyAll([id]);

      dispatch({
        type: subTasksDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.subTasks.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sub-tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subTasksDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: subTasksDestroyActions.DESTROY_ALL_STARTED,
      });

      await SubTasksService.destroyAll(ids);

      dispatch({
        type: subTasksDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.subTasks.destroyAll.success'),
      );

      getHistory().push('/sub-tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subTasksDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default subTasksDestroyActions;
