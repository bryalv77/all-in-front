import listActions from 'src/modules/businessCategory/list/businessCategoryListActions';
import BusinessCategoryService from 'src/modules/businessCategory/businessCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BUSINESSCATEGORY_DESTROY';

const businessCategoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessCategoryDestroyActions.DESTROY_STARTED,
      });

      await BusinessCategoryService.destroyAll([id]);

      dispatch({
        type: businessCategoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.businessCategory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/business-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessCategoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: businessCategoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await BusinessCategoryService.destroyAll(ids);

      dispatch({
        type: businessCategoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.businessCategory.destroyAll.success'),
      );

      getHistory().push('/business-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessCategoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default businessCategoryDestroyActions;
