import ProductService from '../../../modules/product/productService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'PRODUCT_VIEW';

const productViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productViewActions.FIND_STARTED,
      });

      const record = await ProductService.find(id);

      dispatch({
        type: productViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productViewActions.FIND_ERROR,
      });

      getHistory().push('/product');
    }
  },
};

export default productViewActions;
