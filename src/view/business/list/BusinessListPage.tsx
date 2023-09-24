import React from 'react';
import { i18n } from 'src/i18n';
import BusinessListFilter from 'src/view/business/list/BusinessListFilter';
import BusinessListTable from 'src/view/business/list/BusinessListTable';
import BusinessListToolbar from 'src/view/business/list/BusinessListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.business.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.business.list.title')}
        </h1>
        <BusinessListToolbar />
        <BusinessListFilter />
        <BusinessListTable />
      </div>
    </>
  );
}

export default BusinessListPage;
