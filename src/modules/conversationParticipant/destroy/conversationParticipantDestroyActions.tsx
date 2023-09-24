import listActions from '../../../modules/conversationParticipant/list/conversationParticipantListActions';
import ConversationParticipantService from '../../../modules/conversationParticipant/conversationParticipantService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'CONVERSATIONPARTICIPANT_DESTROY';

const conversationParticipantDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_STARTED,
      });

      await ConversationParticipantService.destroyAll([id]);

      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n(
          'entities.conversationParticipant.destroy.success',
        ),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/conversation-participant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_ALL_STARTED,
      });

      await ConversationParticipantService.destroyAll(ids);

      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n(
          'entities.conversationParticipant.destroyAll.success',
        ),
      );

      getHistory().push('/conversation-participant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: conversationParticipantDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default conversationParticipantDestroyActions;
