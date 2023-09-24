import CourseCommentService from 'src/modules/courseComment/courseCommentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSECOMMENT_VIEW';

const courseCommentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseCommentViewActions.FIND_STARTED,
      });

      const record = await CourseCommentService.find(id);

      dispatch({
        type: courseCommentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseCommentViewActions.FIND_ERROR,
      });

      getHistory().push('/course-comment');
    }
  },
};

export default courseCommentViewActions;
