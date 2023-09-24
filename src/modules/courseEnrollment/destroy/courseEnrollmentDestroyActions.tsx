import listActions from 'src/modules/courseEnrollment/list/courseEnrollmentListActions';
import CourseEnrollmentService from 'src/modules/courseEnrollment/courseEnrollmentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSEENROLLMENT_DESTROY';

const courseEnrollmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_STARTED,
      });

      await CourseEnrollmentService.destroyAll([id]);

      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseEnrollment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseEnrollmentService.destroyAll(ids);

      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseEnrollment.destroyAll.success'),
      );

      getHistory().push('/course-enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseEnrollmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseEnrollmentDestroyActions;
