import listActions from '../../../modules/message/list/messageListActions';
import MessageService from '../../../modules/message/messageService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'MESSAGE_DESTROY';

const messageDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: messageDestroyActions.DESTROY_STARTED,
      });

      await MessageService.destroyAll([id]);

      dispatch({
        type: messageDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.message.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/message');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: messageDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: messageDestroyActions.DESTROY_ALL_STARTED,
      });

      await MessageService.destroyAll(ids);

      dispatch({
        type: messageDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.message.destroyAll.success'),
      );

      getHistory().push('/message');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: messageDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default messageDestroyActions;
