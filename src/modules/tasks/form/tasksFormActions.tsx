import TasksService from '../../../modules/tasks/tasksService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'TASKS_FORM';

const tasksFormActions = {
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
        type: tasksFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TasksService.find(id);
      }

      dispatch({
        type: tasksFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tasksFormActions.INIT_ERROR,
      });

      getHistory().push('/tasks');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: tasksFormActions.CREATE_STARTED,
      });

      await TasksService.create(values);

      dispatch({
        type: tasksFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tasks.create.success'),
      );

      getHistory().push('/tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tasksFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: tasksFormActions.UPDATE_STARTED,
      });

      await TasksService.update(id, values);

      dispatch({
        type: tasksFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tasks.update.success'),
      );

      getHistory().push('/tasks');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tasksFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default tasksFormActions;
