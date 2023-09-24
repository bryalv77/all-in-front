import PromotionsService from '../../../modules/promotions/promotionsService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'PROMOTIONS_VIEW';

const promotionsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: promotionsViewActions.FIND_STARTED,
      });

      const record = await PromotionsService.find(id);

      dispatch({
        type: promotionsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: promotionsViewActions.FIND_ERROR,
      });

      getHistory().push('/promotions');
    }
  },
};

export default promotionsViewActions;
