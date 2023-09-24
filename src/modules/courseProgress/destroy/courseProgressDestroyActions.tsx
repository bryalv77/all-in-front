import listActions from '../../../modules/courseProgress/list/courseProgressListActions';
import CourseProgressService from '../../../modules/courseProgress/courseProgressService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'COURSEPROGRESS_DESTROY';

const courseProgressDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseProgressDestroyActions.DESTROY_STARTED,
      });

      await CourseProgressService.destroyAll([id]);

      dispatch({
        type: courseProgressDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseProgress.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-progress');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseProgressDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseProgressDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseProgressService.destroyAll(ids);

      dispatch({
        type: courseProgressDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseProgress.destroyAll.success'),
      );

      getHistory().push('/course-progress');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseProgressDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseProgressDestroyActions;
