import React from 'react';
import { i18n } from 'src/i18n';
import OperationListFilter from 'src/view/operation/list/OperationListFilter';
import OperationListTable from 'src/view/operation/list/OperationListTable';
import OperationListToolbar from 'src/view/operation/list/OperationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function OperationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.operation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.operation.list.title')}
        </h1>
        <OperationListToolbar />
        <OperationListFilter />
        <OperationListTable />
      </div>
    </>
  );
}

export default OperationListPage;
