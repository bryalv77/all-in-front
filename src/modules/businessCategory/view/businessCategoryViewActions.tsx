import BusinessCategoryService from 'src/modules/businessCategory/businessCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSCATEGORY_VIEW';

const businessCategoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessCategoryViewActions.FIND_STARTED,
      });

      const record = await BusinessCategoryService.find(id);

      dispatch({
        type: businessCategoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessCategoryViewActions.FIND_ERROR,
      });

      getHistory().push('/business-category');
    }
  },
};

export default businessCategoryViewActions;
