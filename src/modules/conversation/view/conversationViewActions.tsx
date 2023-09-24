import ConversationService from '../../../modules/conversation/conversationService';
import Errors from '../../../modules/shared/error/errors';
import { getHistory } from '../../../modules/store';

const prefix = 'CONVERSATION_VIEW';

const conversationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: conversationViewActions.FIND_STARTED,
      });

      const record = await ConversationService.find(id);

      dispatch({
        type: conversationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: conversationViewActions.FIND_ERROR,
      });

      getHistory().push('/conversation');
    }
  },
};

export default conversationViewActions;
