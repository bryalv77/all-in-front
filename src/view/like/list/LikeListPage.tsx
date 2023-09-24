import React from 'react';
import { i18n } from '../../../i18n';
import LikeListFilter from '../../../view/like/list/LikeListFilter';
import LikeListTable from '../../../view/like/list/LikeListTable';
import LikeListToolbar from '../../../view/like/list/LikeListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function LikeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.like.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.like.list.title')}
        </h1>
        <LikeListToolbar />
        <LikeListFilter />
        <LikeListTable />
      </div>
    </>
  );
}

export default LikeListPage;
