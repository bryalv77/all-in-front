import CourseProgressService from 'src/modules/courseProgress/courseProgressService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSEPROGRESS_VIEW';

const courseProgressViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseProgressViewActions.FIND_STARTED,
      });

      const record = await CourseProgressService.find(id);

      dispatch({
        type: courseProgressViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseProgressViewActions.FIND_ERROR,
      });

      getHistory().push('/course-progress');
    }
  },
};

export default courseProgressViewActions;
