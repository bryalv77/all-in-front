import React from 'react';
import { i18n } from 'src/i18n';
import CountryListFilter from 'src/view/country/list/CountryListFilter';
import CountryListTable from 'src/view/country/list/CountryListTable';
import CountryListToolbar from 'src/view/country/list/CountryListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CountryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.country.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.country.list.title')}
        </h1>
        <CountryListToolbar />
        <CountryListFilter />
        <CountryListTable />
      </div>
    </>
  );
}

export default CountryListPage;
