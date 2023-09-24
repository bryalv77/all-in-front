import CourseCategoryService from 'src/modules/courseCategory/courseCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSECATEGORY_VIEW';

const courseCategoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseCategoryViewActions.FIND_STARTED,
      });

      const record = await CourseCategoryService.find(id);

      dispatch({
        type: courseCategoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseCategoryViewActions.FIND_ERROR,
      });

      getHistory().push('/course-category');
    }
  },
};

export default courseCategoryViewActions;
