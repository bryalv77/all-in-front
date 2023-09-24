import CourseCategoryService from 'src/modules/courseCategory/courseCategoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COURSECATEGORY_FORM';

const courseCategoryFormActions = {
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
        type: courseCategoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseCategoryService.find(id);
      }

      dispatch({
        type: courseCategoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseCategoryFormActions.INIT_ERROR,
      });

      getHistory().push('/course-category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseCategoryFormActions.CREATE_STARTED,
      });

      await CourseCategoryService.create(values);

      dispatch({
        type: courseCategoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseCategory.create.success'),
      );

      getHistory().push('/course-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseCategoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseCategoryFormActions.UPDATE_STARTED,
      });

      await CourseCategoryService.update(id, values);

      dispatch({
        type: courseCategoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseCategory.update.success'),
      );

      getHistory().push('/course-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseCategoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseCategoryFormActions;
