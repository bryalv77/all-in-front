import React from 'react';
import { i18n } from 'src/i18n';
import FollowersListFilter from 'src/view/followers/list/FollowersListFilter';
import FollowersListTable from 'src/view/followers/list/FollowersListTable';
import FollowersListToolbar from 'src/view/followers/list/FollowersListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function FollowersListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.followers.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.followers.list.title')}
        </h1>
        <FollowersListToolbar />
        <FollowersListFilter />
        <FollowersListTable />
      </div>
    </>
  );
}

export default FollowersListPage;
