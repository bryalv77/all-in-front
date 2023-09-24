import React from 'react';
import { i18n } from '../../../i18n';
import PlaylistSongListFilter from '../../../view/playlistSong/list/PlaylistSongListFilter';
import PlaylistSongListTable from '../../../view/playlistSong/list/PlaylistSongListTable';
import PlaylistSongListToolbar from '../../../view/playlistSong/list/PlaylistSongListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PlaylistSongListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.playlistSong.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.playlistSong.list.title')}
        </h1>
        <PlaylistSongListToolbar />
        <PlaylistSongListFilter />
        <PlaylistSongListTable />
      </div>
    </>
  );
}

export default PlaylistSongListPage;
