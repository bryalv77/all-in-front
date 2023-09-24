import React from 'react';
import { i18n } from 'src/i18n';
import CityListFilter from 'src/view/city/list/CityListFilter';
import CityListTable from 'src/view/city/list/CityListTable';
import CityListToolbar from 'src/view/city/list/CityListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CityListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.city.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.city.list.title')}
        </h1>
        <CityListToolbar />
        <CityListFilter />
        <CityListTable />
      </div>
    </>
  );
}

export default CityListPage;
