import CategoryCourseRelationService from 'src/modules/categoryCourseRelation/categoryCourseRelationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CATEGORYCOURSERELATION_FORM';

const categoryCourseRelationFormActions = {
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
        type: categoryCourseRelationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CategoryCourseRelationService.find(id);
      }

      dispatch({
        type: categoryCourseRelationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryCourseRelationFormActions.INIT_ERROR,
      });

      getHistory().push('/category-course-relation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: categoryCourseRelationFormActions.CREATE_STARTED,
      });

      await CategoryCourseRelationService.create(values);

      dispatch({
        type: categoryCourseRelationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryCourseRelation.create.success'),
      );

      getHistory().push('/category-course-relation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryCourseRelationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: categoryCourseRelationFormActions.UPDATE_STARTED,
      });

      await CategoryCourseRelationService.update(id, values);

      dispatch({
        type: categoryCourseRelationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryCourseRelation.update.success'),
      );

      getHistory().push('/category-course-relation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryCourseRelationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default categoryCourseRelationFormActions;
