import ConversationParticipantService from '../../../modules/conversationParticipant/conversationParticipantService';
import Errors from '../../../modules/shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../../modules/store';
import { i18n } from '../../../i18n';

const prefix = 'CONVERSATIONPARTICIPANT_FORM';

const conversationParticipantFormActions = {
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
        type: conversationParticipantFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ConversationParticipantService.find(
          id,
        );
      }

      dispatch({
        type: conversationParticipantFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationParticipantFormActions.INIT_ERROR,
      });

      getHistory().push('/conversation-participant');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: conversationParticipantFormActions.CREATE_STARTED,
      });

      await ConversationParticipantService.create(values);

      dispatch({
        type: conversationParticipantFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n(
          'entities.conversationParticipant.create.success',
        ),
      );

      getHistory().push('/conversation-participant');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationParticipantFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: conversationParticipantFormActions.UPDATE_STARTED,
      });

      await ConversationParticipantService.update(
        id,
        values,
      );

      dispatch({
        type: conversationParticipantFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n(
          'entities.conversationParticipant.update.success',
        ),
      );

      getHistory().push('/conversation-participant');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationParticipantFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default conversationParticipantFormActions;
