import ConversationParticipantService from '../../../modules/conversationParticipant/conversationParticipantService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'CONVERSATIONPARTICIPANT_VIEW';

const conversationParticipantViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: conversationParticipantViewActions.FIND_STARTED,
      });

      const record =
        await ConversationParticipantService.find(id);

      dispatch({
        type: conversationParticipantViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationParticipantViewActions.FIND_ERROR,
      });

      getHistory().push('/conversation-participant');
    }
  },
};

export default conversationParticipantViewActions;
