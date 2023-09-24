import React from 'react';
import { i18n } from '../../../i18n';
import BankListFilter from '../../../view/bank/list/BankListFilter';
import BankListTable from '../../../view/bank/list/BankListTable';
import BankListToolbar from '../../../view/bank/list/BankListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function BankListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.bank.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.bank.list.title')}
        </h1>
        <BankListToolbar />
        <BankListFilter />
        <BankListTable />
      </div>
    </>
  );
}

export default BankListPage;
