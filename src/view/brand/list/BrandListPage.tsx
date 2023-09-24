import React from 'react';
import { i18n } from '../../../i18n';
import BrandListFilter from '../../../view/brand/list/BrandListFilter';
import BrandListTable from '../../../view/brand/list/BrandListTable';
import BrandListToolbar from '../../../view/brand/list/BrandListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function BrandListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.brand.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.brand.list.title')}
        </h1>
        <BrandListToolbar />
        <BrandListFilter />
        <BrandListTable />
      </div>
    </>
  );
}

export default BrandListPage;
