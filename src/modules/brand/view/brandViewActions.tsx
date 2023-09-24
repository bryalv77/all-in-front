import BrandService from 'src/modules/brand/brandService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BRAND_VIEW';

const brandViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: brandViewActions.FIND_STARTED,
      });

      const record = await BrandService.find(id);

      dispatch({
        type: brandViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandViewActions.FIND_ERROR,
      });

      getHistory().push('/brand');
    }
  },
};

export default brandViewActions;
