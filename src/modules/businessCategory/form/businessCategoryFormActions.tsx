import BusinessCategoryService from 'src/modules/businessCategory/businessCategoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BUSINESSCATEGORY_FORM';

const businessCategoryFormActions = {
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
        type: businessCategoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BusinessCategoryService.find(id);
      }

      dispatch({
        type: businessCategoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessCategoryFormActions.INIT_ERROR,
      });

      getHistory().push('/business-category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: businessCategoryFormActions.CREATE_STARTED,
      });

      await BusinessCategoryService.create(values);

      dispatch({
        type: businessCategoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessCategory.create.success'),
      );

      getHistory().push('/business-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessCategoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: businessCategoryFormActions.UPDATE_STARTED,
      });

      await BusinessCategoryService.update(id, values);

      dispatch({
        type: businessCategoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessCategory.update.success'),
      );

      getHistory().push('/business-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessCategoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default businessCategoryFormActions;
