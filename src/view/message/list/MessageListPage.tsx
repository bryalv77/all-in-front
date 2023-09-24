import React from 'react';
import { i18n } from 'src/i18n';
import MessageListFilter from 'src/view/message/list/MessageListFilter';
import MessageListTable from 'src/view/message/list/MessageListTable';
import MessageListToolbar from 'src/view/message/list/MessageListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function MessageListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.message.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.message.list.title')}
        </h1>
        <MessageListToolbar />
        <MessageListFilter />
        <MessageListTable />
      </div>
    </>
  );
}

export default MessageListPage;
