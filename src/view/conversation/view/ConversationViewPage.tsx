import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/conversation/view/conversationViewActions';
import selectors from '../../../modules/conversation/view/conversationViewSelectors';
import ConversationView from '../../../view/conversation/view/ConversationView';
import ConversationViewToolbar from '../../../view/conversation/view/ConversationViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function ConversationPage() {
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
            i18n('entities.conversation.menu'),
            '/conversation',
          ],
          [i18n('entities.conversation.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.conversation.view.title')}
        </h1>

        <ConversationViewToolbar match={match} />

        <ConversationView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default ConversationPage;
