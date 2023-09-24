import ConversationService from '../../../modules/conversation/conversationService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'CONVERSATION_FORM';

const conversationFormActions = {
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
        type: conversationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ConversationService.find(id);
      }

      dispatch({
        type: conversationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationFormActions.INIT_ERROR,
      });

      getHistory().push('/conversation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: conversationFormActions.CREATE_STARTED,
      });

      await ConversationService.create(values);

      dispatch({
        type: conversationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.conversation.create.success'),
      );

      getHistory().push('/conversation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: conversationFormActions.UPDATE_STARTED,
      });

      await ConversationService.update(id, values);

      dispatch({
        type: conversationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.conversation.update.success'),
      );

      getHistory().push('/conversation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default conversationFormActions;
