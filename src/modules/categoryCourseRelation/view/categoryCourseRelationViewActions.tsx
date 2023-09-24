import CategoryCourseRelationService from 'src/modules/categoryCourseRelation/categoryCourseRelationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORYCOURSERELATION_VIEW';

const categoryCourseRelationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryCourseRelationViewActions.FIND_STARTED,
      });

      const record = await CategoryCourseRelationService.find(id);

      dispatch({
        type: categoryCourseRelationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryCourseRelationViewActions.FIND_ERROR,
      });

      getHistory().push('/category-course-relation');
    }
  },
};

export default categoryCourseRelationViewActions;
