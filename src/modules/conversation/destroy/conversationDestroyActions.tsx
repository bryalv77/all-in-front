import listActions from '../../../modules/conversation/list/conversationListActions';
import ConversationService from '../../../modules/conversation/conversationService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'CONVERSATION_DESTROY';

const conversationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: conversationDestroyActions.DESTROY_STARTED,
      });

      await ConversationService.destroyAll([id]);

      dispatch({
        type: conversationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.conversation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/conversation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: conversationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: conversationDestroyActions.DESTROY_ALL_STARTED,
      });

      await ConversationService.destroyAll(ids);

      dispatch({
        type: conversationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.conversation.destroyAll.success'),
      );

      getHistory().push('/conversation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: conversationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default conversationDestroyActions;
