import React from 'react';
import { i18n } from 'src/i18n';
import PostHashtagListFilter from 'src/view/postHashtag/list/PostHashtagListFilter';
import PostHashtagListTable from 'src/view/postHashtag/list/PostHashtagListTable';
import PostHashtagListToolbar from 'src/view/postHashtag/list/PostHashtagListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PostHashtagListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.postHashtag.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.postHashtag.list.title')}
        </h1>
        <PostHashtagListToolbar />
        <PostHashtagListFilter />
        <PostHashtagListTable />
      </div>
    </>
  );
}

export default PostHashtagListPage;
