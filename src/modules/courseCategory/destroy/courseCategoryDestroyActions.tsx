import listActions from 'src/modules/courseCategory/list/courseCategoryListActions';
import CourseCategoryService from 'src/modules/courseCategory/courseCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSECATEGORY_DESTROY';

const courseCategoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseCategoryDestroyActions.DESTROY_STARTED,
      });

      await CourseCategoryService.destroyAll([id]);

      dispatch({
        type: courseCategoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseCategory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseCategoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseCategoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseCategoryService.destroyAll(ids);

      dispatch({
        type: courseCategoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseCategory.destroyAll.success'),
      );

      getHistory().push('/course-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseCategoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseCategoryDestroyActions;
