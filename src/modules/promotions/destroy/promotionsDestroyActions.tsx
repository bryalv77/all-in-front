import listActions from 'src/modules/promotions/list/promotionsListActions';
import PromotionsService from 'src/modules/promotions/promotionsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROMOTIONS_DESTROY';

const promotionsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: promotionsDestroyActions.DESTROY_STARTED,
      });

      await PromotionsService.destroyAll([id]);

      dispatch({
        type: promotionsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.promotions.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/promotions');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: promotionsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: promotionsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PromotionsService.destroyAll(ids);

      dispatch({
        type: promotionsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.promotions.destroyAll.success'),
      );

      getHistory().push('/promotions');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: promotionsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default promotionsDestroyActions;
