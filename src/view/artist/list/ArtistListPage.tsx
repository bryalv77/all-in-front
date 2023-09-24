import React from 'react';
import { i18n } from '../../../i18n';
import ArtistListFilter from '../../../view/artist/list/ArtistListFilter';
import ArtistListTable from '../../../view/artist/list/ArtistListTable';
import ArtistListToolbar from '../../../view/artist/list/ArtistListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function ArtistListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.artist.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.artist.list.title')}
        </h1>
        <ArtistListToolbar />
        <ArtistListFilter />
        <ArtistListTable />
      </div>
    </>
  );
}

export default ArtistListPage;
