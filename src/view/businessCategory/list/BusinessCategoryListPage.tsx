import React from 'react';
import { i18n } from 'src/i18n';
import BusinessCategoryListFilter from 'src/view/businessCategory/list/BusinessCategoryListFilter';
import BusinessCategoryListTable from 'src/view/businessCategory/list/BusinessCategoryListTable';
import BusinessCategoryListToolbar from 'src/view/businessCategory/list/BusinessCategoryListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessCategory.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessCategory.list.title')}
        </h1>
        <BusinessCategoryListToolbar />
        <BusinessCategoryListFilter />
        <BusinessCategoryListTable />
      </div>
    </>
  );
}

export default BusinessCategoryListPage;
