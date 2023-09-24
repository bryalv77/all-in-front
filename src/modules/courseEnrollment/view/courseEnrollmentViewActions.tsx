import CourseEnrollmentService from '../../../modules/courseEnrollment/courseEnrollmentService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'COURSEENROLLMENT_VIEW';

const courseEnrollmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseEnrollmentViewActions.FIND_STARTED,
      });

      const record = await CourseEnrollmentService.find(id);

      dispatch({
        type: courseEnrollmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseEnrollmentViewActions.FIND_ERROR,
      });

      getHistory().push('/course-enrollment');
    }
  },
};

export default courseEnrollmentViewActions;
