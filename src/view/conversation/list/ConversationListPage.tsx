import React from 'react';
import { i18n } from '../../../i18n';
import ConversationListFilter from '../../../view/conversation/list/ConversationListFilter';
import ConversationListTable from '../../../view/conversation/list/ConversationListTable';
import ConversationListToolbar from '../../../view/conversation/list/ConversationListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function ConversationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.conversation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.conversation.list.title')}
        </h1>
        <ConversationListToolbar />
        <ConversationListFilter />
        <ConversationListTable />
      </div>
    </>
  );
}

export default ConversationListPage;
