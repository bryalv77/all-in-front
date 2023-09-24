import React from 'react';
import { i18n } from '../../../i18n';
import PaymentMethodsListFilter from '../../../view/paymentMethods/list/PaymentMethodsListFilter';
import PaymentMethodsListTable from '../../../view/paymentMethods/list/PaymentMethodsListTable';
import PaymentMethodsListToolbar from '../../../view/paymentMethods/list/PaymentMethodsListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PaymentMethodsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.paymentMethods.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.paymentMethods.list.title')}
        </h1>
        <PaymentMethodsListToolbar />
        <PaymentMethodsListFilter />
        <PaymentMethodsListTable />
      </div>
    </>
  );
}

export default PaymentMethodsListPage;
