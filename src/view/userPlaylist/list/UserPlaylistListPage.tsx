import React from 'react';
import { i18n } from 'src/i18n';
import UserPlaylistListFilter from 'src/view/userPlaylist/list/UserPlaylistListFilter';
import UserPlaylistListTable from 'src/view/userPlaylist/list/UserPlaylistListTable';
import UserPlaylistListToolbar from 'src/view/userPlaylist/list/UserPlaylistListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function UserPlaylistListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.userPlaylist.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.userPlaylist.list.title')}
        </h1>
        <UserPlaylistListToolbar />
        <UserPlaylistListFilter />
        <UserPlaylistListTable />
      </div>
    </>
  );
}

export default UserPlaylistListPage;
