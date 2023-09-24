import React from 'react';
import { i18n } from 'src/i18n';
import HashtagListFilter from 'src/view/hashtag/list/HashtagListFilter';
import HashtagListTable from 'src/view/hashtag/list/HashtagListTable';
import HashtagListToolbar from 'src/view/hashtag/list/HashtagListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function HashtagListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.hashtag.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.hashtag.list.title')}
        </h1>
        <HashtagListToolbar />
        <HashtagListFilter />
        <HashtagListTable />
      </div>
    </>
  );
}

export default HashtagListPage;
