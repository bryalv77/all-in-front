import ProductReviewService from 'src/modules/productReview/productReviewService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRODUCTREVIEW_VIEW';

const productReviewViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productReviewViewActions.FIND_STARTED,
      });

      const record = await ProductReviewService.find(id);

      dispatch({
        type: productReviewViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productReviewViewActions.FIND_ERROR,
      });

      getHistory().push('/product-review');
    }
  },
};

export default productReviewViewActions;
