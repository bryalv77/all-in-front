import React from 'react';
import { i18n } from '../../../i18n';
import OrderDetailListFilter from '../../../view/orderDetail/list/OrderDetailListFilter';
import OrderDetailListTable from '../../../view/orderDetail/list/OrderDetailListTable';
import OrderDetailListToolbar from '../../../view/orderDetail/list/OrderDetailListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function OrderDetailListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.orderDetail.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.orderDetail.list.title')}
        </h1>
        <OrderDetailListToolbar />
        <OrderDetailListFilter />
        <OrderDetailListTable />
      </div>
    </>
  );
}

export default OrderDetailListPage;
