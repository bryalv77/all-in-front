import listActions from '../../../modules/country/list/countryListActions';
import CountryService from '../../../modules/country/countryService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'COUNTRY_DESTROY';

const countryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: countryDestroyActions.DESTROY_STARTED,
      });

      await CountryService.destroyAll([id]);

      dispatch({
        type: countryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.country.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/country');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: countryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: countryDestroyActions.DESTROY_ALL_STARTED,
      });

      await CountryService.destroyAll(ids);

      dispatch({
        type: countryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.country.destroyAll.success'),
      );

      getHistory().push('/country');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: countryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default countryDestroyActions;
