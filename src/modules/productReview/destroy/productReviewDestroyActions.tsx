import listActions from 'src/modules/productReview/list/productReviewListActions';
import ProductReviewService from 'src/modules/productReview/productReviewService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRODUCTREVIEW_DESTROY';

const productReviewDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productReviewDestroyActions.DESTROY_STARTED,
      });

      await ProductReviewService.destroyAll([id]);

      dispatch({
        type: productReviewDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.productReview.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/product-review');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: productReviewDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: productReviewDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProductReviewService.destroyAll(ids);

      dispatch({
        type: productReviewDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.productReview.destroyAll.success'),
      );

      getHistory().push('/product-review');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: productReviewDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default productReviewDestroyActions;
