import React from 'react';
import { i18n } from 'src/i18n';
import AlbumListFilter from 'src/view/album/list/AlbumListFilter';
import AlbumListTable from 'src/view/album/list/AlbumListTable';
import AlbumListToolbar from 'src/view/album/list/AlbumListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function AlbumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.album.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.album.list.title')}
        </h1>
        <AlbumListToolbar />
        <AlbumListFilter />
        <AlbumListTable />
      </div>
    </>
  );
}

export default AlbumListPage;
