import TeacherService from '../../../modules/teacher/teacherService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'TEACHER_VIEW';

const teacherViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: teacherViewActions.FIND_STARTED,
      });

      const record = await TeacherService.find(id);

      dispatch({
        type: teacherViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherViewActions.FIND_ERROR,
      });

      getHistory().push('/teacher');
    }
  },
};

export default teacherViewActions;
