import React from 'react';
import { i18n } from '../../../i18n';
import AddressListFilter from '../../../view/address/list/AddressListFilter';
import AddressListTable from '../../../view/address/list/AddressListTable';
import AddressListToolbar from '../../../view/address/list/AddressListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function AddressListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.address.list.title')}
        </h1>
        <AddressListToolbar />
        <AddressListFilter />
        <AddressListTable />
      </div>
    </>
  );
}

export default AddressListPage;
