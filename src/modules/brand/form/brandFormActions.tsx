import BrandService from '../../../modules/brand/brandService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'BRAND_FORM';

const brandFormActions = {
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
        type: brandFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BrandService.find(id);
      }

      dispatch({
        type: brandFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandFormActions.INIT_ERROR,
      });

      getHistory().push('/brand');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: brandFormActions.CREATE_STARTED,
      });

      await BrandService.create(values);

      dispatch({
        type: brandFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.brand.create.success'),
      );

      getHistory().push('/brand');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: brandFormActions.UPDATE_STARTED,
      });

      await BrandService.update(id, values);

      dispatch({
        type: brandFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.brand.update.success'),
      );

      getHistory().push('/brand');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default brandFormActions;
