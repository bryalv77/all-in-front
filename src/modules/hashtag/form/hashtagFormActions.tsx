import HashtagService from '../../../modules/hashtag/hashtagService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'HASHTAG_FORM';

const hashtagFormActions = {
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
        type: hashtagFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await HashtagService.find(id);
      }

      dispatch({
        type: hashtagFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: hashtagFormActions.INIT_ERROR,
      });

      getHistory().push('/hashtag');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: hashtagFormActions.CREATE_STARTED,
      });

      await HashtagService.create(values);

      dispatch({
        type: hashtagFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.hashtag.create.success'),
      );

      getHistory().push('/hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: hashtagFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: hashtagFormActions.UPDATE_STARTED,
      });

      await HashtagService.update(id, values);

      dispatch({
        type: hashtagFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.hashtag.update.success'),
      );

      getHistory().push('/hashtag');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: hashtagFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default hashtagFormActions;
