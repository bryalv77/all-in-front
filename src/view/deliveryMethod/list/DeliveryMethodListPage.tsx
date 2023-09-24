import React from 'react';
import { i18n } from '../../../i18n';
import DeliveryMethodListFilter from '../../../view/deliveryMethod/list/DeliveryMethodListFilter';
import DeliveryMethodListTable from '../../../view/deliveryMethod/list/DeliveryMethodListTable';
import DeliveryMethodListToolbar from '../../../view/deliveryMethod/list/DeliveryMethodListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function DeliveryMethodListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deliveryMethod.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.deliveryMethod.list.title')}
        </h1>
        <DeliveryMethodListToolbar />
        <DeliveryMethodListFilter />
        <DeliveryMethodListTable />
      </div>
    </>
  );
}

export default DeliveryMethodListPage;
