import listActions from 'src/modules/brand/list/brandListActions';
import BrandService from 'src/modules/brand/brandService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BRAND_DESTROY';

const brandDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: brandDestroyActions.DESTROY_STARTED,
      });

      await BrandService.destroyAll([id]);

      dispatch({
        type: brandDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.brand.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/brand');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: brandDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: brandDestroyActions.DESTROY_ALL_STARTED,
      });

      await BrandService.destroyAll(ids);

      dispatch({
        type: brandDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.brand.destroyAll.success'),
      );

      getHistory().push('/brand');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: brandDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default brandDestroyActions;
