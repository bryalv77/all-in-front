import React from 'react';
import { i18n } from 'src/i18n';
import ServiceListFilter from 'src/view/service/list/ServiceListFilter';
import ServiceListTable from 'src/view/service/list/ServiceListTable';
import ServiceListToolbar from 'src/view/service/list/ServiceListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ServiceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.service.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.service.list.title')}
        </h1>
        <ServiceListToolbar />
        <ServiceListFilter />
        <ServiceListTable />
      </div>
    </>
  );
}

export default ServiceListPage;
