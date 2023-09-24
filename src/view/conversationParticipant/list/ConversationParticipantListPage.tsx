import React from 'react';
import { i18n } from 'src/i18n';
import ConversationParticipantListFilter from 'src/view/conversationParticipant/list/ConversationParticipantListFilter';
import ConversationParticipantListTable from 'src/view/conversationParticipant/list/ConversationParticipantListTable';
import ConversationParticipantListToolbar from 'src/view/conversationParticipant/list/ConversationParticipantListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ConversationParticipantListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.conversationParticipant.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.conversationParticipant.list.title')}
        </h1>
        <ConversationParticipantListToolbar />
        <ConversationParticipantListFilter />
        <ConversationParticipantListTable />
      </div>
    </>
  );
}

export default ConversationParticipantListPage;
