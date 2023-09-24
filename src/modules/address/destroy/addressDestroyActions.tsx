import listActions from '../../../modules/address/list/addressListActions';
import AddressService from '../../../modules/address/addressService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'ADDRESS_DESTROY';

const addressDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: addressDestroyActions.DESTROY_STARTED,
      });

      await AddressService.destroyAll([id]);

      dispatch({
        type: addressDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.address.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/address');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: addressDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: addressDestroyActions.DESTROY_ALL_STARTED,
      });

      await AddressService.destroyAll(ids);

      dispatch({
        type: addressDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.address.destroyAll.success'),
      );

      getHistory().push('/address');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: addressDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default addressDestroyActions;
