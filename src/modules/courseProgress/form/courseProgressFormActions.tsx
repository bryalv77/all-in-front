import CourseProgressService from '../../../modules/courseProgress/courseProgressService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'COURSEPROGRESS_FORM';

const courseProgressFormActions = {
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
        type: courseProgressFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseProgressService.find(id);
      }

      dispatch({
        type: courseProgressFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseProgressFormActions.INIT_ERROR,
      });

      getHistory().push('/course-progress');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseProgressFormActions.CREATE_STARTED,
      });

      await CourseProgressService.create(values);

      dispatch({
        type: courseProgressFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseProgress.create.success'),
      );

      getHistory().push('/course-progress');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseProgressFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseProgressFormActions.UPDATE_STARTED,
      });

      await CourseProgressService.update(id, values);

      dispatch({
        type: courseProgressFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseProgress.update.success'),
      );

      getHistory().push('/course-progress');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseProgressFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseProgressFormActions;
