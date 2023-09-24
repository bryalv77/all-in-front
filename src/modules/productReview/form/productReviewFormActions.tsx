import ProductReviewService from 'src/modules/productReview/productReviewService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRODUCTREVIEW_FORM';

const productReviewFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productReviewFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProductReviewService.find(id);
      }

      dispatch({
        type: productReviewFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productReviewFormActions.INIT_ERROR,
      });

      getHistory().push('/product-review');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: productReviewFormActions.CREATE_STARTED,
      });

      await ProductReviewService.create(values);

      dispatch({
        type: productReviewFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.productReview.create.success'),
      );

      getHistory().push('/product-review');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productReviewFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: productReviewFormActions.UPDATE_STARTED,
      });

      await ProductReviewService.update(id, values);

      dispatch({
        type: productReviewFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.productReview.update.success'),
      );

      getHistory().push('/product-review');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productReviewFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default productReviewFormActions;
