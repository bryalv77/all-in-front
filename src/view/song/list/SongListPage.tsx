import React from 'react';
import { i18n } from 'src/i18n';
import SongListFilter from 'src/view/song/list/SongListFilter';
import SongListTable from 'src/view/song/list/SongListTable';
import SongListToolbar from 'src/view/song/list/SongListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function SongListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.song.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.song.list.title')}
        </h1>
        <SongListToolbar />
        <SongListFilter />
        <SongListTable />
      </div>
    </>
  );
}

export default SongListPage;
