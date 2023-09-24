import React from 'react';
import { i18n } from 'src/i18n';
import MediaListFilter from 'src/view/media/list/MediaListFilter';
import MediaListTable from 'src/view/media/list/MediaListTable';
import MediaListToolbar from 'src/view/media/list/MediaListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function MediaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.media.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.media.list.title')}
        </h1>
        <MediaListToolbar />
        <MediaListFilter />
        <MediaListTable />
      </div>
    </>
  );
}

export default MediaListPage;
