import AddressService from '../../../modules/address/addressService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'ADDRESS_VIEW';

const addressViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: addressViewActions.FIND_STARTED,
      });

      const record = await AddressService.find(id);

      dispatch({
        type: addressViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: addressViewActions.FIND_ERROR,
      });

      getHistory().push('/address');
    }
  },
};

export default addressViewActions;
