import React from 'react';
import { i18n } from '../../../i18n';
import PlaylistListFilter from '../../../view/playlist/list/PlaylistListFilter';
import PlaylistListTable from '../../../view/playlist/list/PlaylistListTable';
import PlaylistListToolbar from '../../../view/playlist/list/PlaylistListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PlaylistListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.playlist.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.playlist.list.title')}
        </h1>
        <PlaylistListToolbar />
        <PlaylistListFilter />
        <PlaylistListTable />
      </div>
    </>
  );
}

export default PlaylistListPage;
