import React from 'react';
import { i18n } from 'src/i18n';
import PostsListFilter from 'src/view/posts/list/PostsListFilter';
import PostsListTable from 'src/view/posts/list/PostsListTable';
import PostsListToolbar from 'src/view/posts/list/PostsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PostsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.posts.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.posts.list.title')}
        </h1>
        <PostsListToolbar />
        <PostsListFilter />
        <PostsListTable />
      </div>
    </>
  );
}

export default PostsListPage;
