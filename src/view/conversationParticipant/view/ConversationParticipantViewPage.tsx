import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/conversationParticipant/view/conversationParticipantViewActions';
import selectors from '../../../modules/conversationParticipant/view/conversationParticipantViewSelectors';
import ConversationParticipantView from '../../../view/conversationParticipant/view/ConversationParticipantView';
import ConversationParticipantViewToolbar from '../../../view/conversationParticipant/view/ConversationParticipantViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function ConversationParticipantPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id) as any);
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.conversationParticipant.menu'),
            '/conversation-participant',
          ],
          [
            i18n(
              'entities.conversationParticipant.view.title',
            ),
          ],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n(
            'entities.conversationParticipant.view.title',
          )}
        </h1>

        <ConversationParticipantViewToolbar match={match} />

        <ConversationParticipantView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default ConversationParticipantPage;
